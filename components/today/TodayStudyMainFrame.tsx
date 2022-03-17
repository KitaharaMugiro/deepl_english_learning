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
import { useSubmitTodayPublicAnswerMutation } from '../../src/generated/graphql';
import { Copyright } from '../footer/Copyright';
import PhraseList from '../phrase/PhraseList';
import WriteEnglish from '../study/WriteEnglish';
import WriteJapanese from '../study/WriteJapanese';
import TodayStudyTop from './TodayStudyTop';

const steps = ['Your Name', 'Japanese', "English"];
const stepTitles = ["今日の英語年齢診断", "日本語で意見を書く", "英語にする"]

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <TodayStudyTop />;
        case 1:
            return <WriteJapanese />;
        case 2:
            return <WriteEnglish />;
        default:
            return <div />
    }
}

interface Props {
    todayTopic: GetTodayTopicResponse
}

export default function TodayStudyMainFrame(props: Props) {
    const [activeStep, setActiveStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState("")
    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [name] = useAtom(AtomNameWithPersistence)
    const [translation, setTranslation] = useAtom(AtomTranslation)
    const [submitPublicAnswer] = useSubmitTodayPublicAnswerMutation()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const { submitToday } = useEventSubmit()
    const { user } = useUser()

    const [_, setOpenLoading] = useAtom(BackdropAtom)

    useEffect(() => {
        const getTopic = async () => {
            try {
                const { question } = props.todayTopic
                LocalStorageHelper.saveStudySessionId(uuidv4()) //おお、、設定してるのか、、
                setActiveQuestion({ topicId: question.topicId, title: question.title, description: question.description })
            } catch (e) {
                console.warn(e)
            }
        }
        getTopic()
    }, [props.todayTopic])

    //router
    const router = useRouter()

    const handleNext = async () => {
        setOpenLoading(true)

        // API飛ばしてエラー返ってきたらエラーハンドリングする
        if (activeStep === 0) {

        } else if (activeStep === 1) {

        } else if (activeStep === 2) {
            //最後のステップ
            const resTranslation = await StudyApi.translate(japanese, props.todayTopic.question.title)
            setTranslation(resTranslation.translation)

            //スコア算出
            const scores = await new ApiSpecialClient().englishScore(english, resTranslation.translation)

            const _score = Math.round(scores.scoreRaw)
            const _age = scores.age

            //スコアを送信する
            RecordApi.submitScore(_score, _age)
            RecordApi.submitDashboard(_score, english, resTranslation.translation, activeQuestion.topicId, japanese, _age)

            //結果の保存
            const { resultId } = await TodayApi.submitTodayTopicResult(
                {
                    todayTopicId: props.todayTopic.question.todayTopicId,
                    score: scores.scoreRaw,
                    topicId: props.todayTopic.question.topicId,
                    english: english,
                    translation: resTranslation.translation,
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
            router.push("/today/" + resultId)
        }

        setOpenLoading(false)
        setErrorMessage("")
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
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
        if (activeStep === 0) {
            return (
                NextButton("次へ進む", name === "")
            )
        } else if (activeStep === 1) {
            return (<>
                <Button onClick={handleBack} style={{
                    marginTop: "30px",
                    marginLeft: "10px",
                }}>
                    名前入力に戻る
                </Button>
                {NextButton("次へ進む", japanese === "")}
            </>

            )
        } else if (activeStep === 2) {
            return (
                <>
                    <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        日本語入力に戻る
                    </Button>
                    {NextButton("結果を見る", english === "")}
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
                <Paper style={{
                    marginTop: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    {/* タイトル(ご希望あれば) */}
                    <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 30, fontWeight: 800 }}>
                        {stepTitles[activeStep]}
                    </Typography>

                    {/* ステッパー */}
                    <Stepper activeStep={activeStep} style={{ margin: "0px 0px 30px" }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {getStepContent(activeStep)}
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