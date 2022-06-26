import { FormControlLabel, Switch } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import { RecordApi } from '../../api/RecordApi';
import { StudyApi } from '../../api/StudyApi';
import { GetTodayTopicResponse, TodayApi } from '../../api/TodayApi';
import { BackdropAtom } from '../../models/jotai/Backdrop';
import { AtomActiveQuestion, AtomAge, AtomEnglish, AtomJapanse, AtomNameWithPersistence, AtomTranslation } from '../../models/jotai/StudyJotai';
import { LocalStorageHelper } from '../../models/localstorage/LocalStorageHelper';
import useEventSubmit from '../../models/util-hooks/useEventSubmit';
import useStudy from '../../models/util-hooks/useStudy';
import useUser from '../../models/util-hooks/useUser';
import { isAlphabet } from '../../models/Utils';
import { useSubmitTodayPublicAnswerMutation } from '../../src/generated/graphql';
import { Copyright } from '../footer/Copyright';
import PhraseList from '../phrase/PhraseList';
import WriteEnglish from '../study/WriteEnglish';
import WriteJapanese from '../study/WriteJapanese';
import TodayStudyTop from './TodayStudyTop';


const japaneseFirstSteps = [
    {
        step: 'Your Name',
        stepTitle: "今日の英語年齢診断",
        component: <TodayStudyTop />
    },
    {
        step: "Japanese",
        stepTitle: "日本語で意見を書く",
        component: <WriteJapanese />
    },
    {
        step: "English",
        stepTitle: "英語にする",
        component: <WriteEnglish />
    }
]

const englishFirstSteps = [
    {
        step: "Your Name",
        stepTitle: "今日の英語年齢診断",
        component: <TodayStudyTop />
    },
    {
        step: "English",
        stepTitle: "英語で意見を書く",
        component: <WriteEnglish englishFirst={true} />
    },
    {
        step: "Japanese",
        stepTitle: "日本語にする",
        component: <WriteJapanese englishFirst={true} />
    }
]


interface Props {
    todayTopic: GetTodayTopicResponse
}

export default function TodayStudyMainFrame(props: Props) {
    //WARN: AtomEnglishFirstWithPersistence使うとレイアウト壊れる
    const [englishFirst, setEnglishFirst] = useState(false)

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [errorMessage, setErrorMessage] = useState("")
    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [name] = useAtom(AtomNameWithPersistence)
    const [translation, setTranslation] = useAtom(AtomTranslation)
    const [submitPublicAnswer] = useSubmitTodayPublicAnswerMutation()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const { submitToday } = useEventSubmit()
    const { user } = useUser()

    const steps = englishFirst ? englishFirstSteps : japaneseFirstSteps
    const activeStep = steps[activeStepIndex]


    const [_, setOpenLoading] = useAtom(BackdropAtom)

    useEffect(() => {
        const getTopic = async () => {
            try {
                const { question } = props.todayTopic
                LocalStorageHelper.saveStudySessionId(uuidv4()) //おお、、設定してるのか、、
                setActiveQuestion({
                    topicId: question.topicId,
                    title: question.title,
                    description: question.description,
                    titleEng: question.titleEng,
                    descriptionEng: question.descriptionEng,
                })
            } catch (e) {
                console.warn(e)
            }
        }
        getTopic()
    }, [props.todayTopic])

    //router
    const router = useRouter()


    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return steps[0].component;
            case 1:
                return steps[1].component;
            case 2:
                return steps[2].component;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = async () => {
        setOpenLoading(true)

        if (activeStep.step === "Japanese") {
            //日本語のパートを終了
            if (isAlphabet(japanese)) {
                setErrorMessage("日本語で記載してください(先頭がアルファベットです)")
                setOpenLoading(false)
                return
            }
            //非同期で翻訳する
            StudyApi.translate(japanese, props.todayTopic.question.title).then(resTranslation => {
                setTranslation(resTranslation.translation)
            })
        }

        if (activeStep.step === "English") {
            if (!isAlphabet(english)) {
                setErrorMessage("英語で記載してください(先頭がアルファベットでないです)")
                setOpenLoading(false)
                return
            }
        }

        if (activeStepIndex == 2) {
            //最後のステップ
            //スコア算出
            const res = await StudyApi.translate(japanese, props.todayTopic.question.title)
            const translation = res.translation
            const scores = await new ApiSpecialClient().englishScore(english, translation)

            const _score = Math.round(scores.scoreRaw)
            const _age = scores.age

            //スコアを送信する
            RecordApi.submitScore(_score, _age)
            RecordApi.submitDashboard(_score, english, translation, activeQuestion.topicId, japanese, _age)

            //結果の保存
            const { resultId } = await TodayApi.submitTodayTopicResult(
                {
                    todayTopicId: props.todayTopic.question.todayTopicId,
                    score: scores.scoreRaw,
                    topicId: props.todayTopic.question.topicId,
                    english: english,
                    translation: translation,
                    age: scores.age,
                    japanese: japanese,
                    name: name
                }
            )

            submitPublicAnswer({
                variables: {
                    topicId: Number(props.todayTopic.question.topicId),
                    answer: english,
                    japanese: japanese,
                    translation: translation,
                    age: scores.age,
                    todayTopicId: props.todayTopic.question.todayTopicId,
                    name: name
                }
            })


            setOpenLoading(false)
            submitToday()
            setJapanese("")
            setEnglish("")
            setTranslation("")
            router.push("/today/" + resultId + "?result=true")
            return
        }

        setOpenLoading(false)
        setErrorMessage("")
        setActiveStepIndex(activeStepIndex + 1);
    };

    const handleBack = () => {
        setActiveStepIndex(activeStepIndex - 1);
    };

    const NextButton = (text: string, disable: boolean) => (
        <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={disable}
            style={{
                marginTop: "30px",
                marginLeft: "10px",
            }}
        >
            {text}
        </Button>
    )

    const renderButtons = () => {
        if (activeStep.step === "Your Name") {
            return (
                NextButton("次へ進む", name === "")
            )
        } else if (activeStep.step === "Japanese") {
            return (<>
                <Button onClick={handleBack} style={{
                    marginTop: "30px",
                    marginLeft: "10px",
                }}>
                    １つ戻る
                </Button>
                {englishFirst ? NextButton("結果を見る", japanese === "") : NextButton("次へ進む", japanese === "")}
            </>

            )
        } else if (activeStep.step === "English") {
            return (
                <>
                    <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        １つ戻る
                    </Button>
                    {englishFirst ? NextButton("次へ進む", english === "") : NextButton("結果を見る", english === "")}
                </>
            )
        }
    }

    return (
        <React.Fragment>
            <main style={{
                width: 'auto',
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <FormControlLabel
                    style={{
                        marginTop: "30px",
                    }}
                    checked={englishFirst}
                    onChange={() => setEnglishFirst(!englishFirst)}
                    control={
                        <Switch />
                    } label={<b
                        onClick={() => setEnglishFirst(!englishFirst)}>英→日で書く</b>} />
                <Paper style={{
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    {/* タイトル(ご希望あれば) */}
                    <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 30, fontWeight: 800 }}>
                        {activeStep.stepTitle}
                    </Typography>

                    {/* ステッパー */}
                    <Stepper activeStep={activeStepIndex} style={{ margin: "0px 0px 30px" }}>
                        {steps.map((step) => (
                            <Step key={step.step}>
                                <StepLabel>{step.step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {getStepContent(activeStepIndex)}
                        <div style={{ color: "#f44336" }}>
                            {errorMessage}
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            {renderButtons()}
                        </div>

                    </React.Fragment>
                </Paper>
                <div style={{ height: 10 }} />
                <Copyright />
            </main>
        </React.Fragment >
    );
}