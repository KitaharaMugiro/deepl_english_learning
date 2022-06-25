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
import { StudyApi } from '../../api/StudyApi';
import { AtomActiveQuestion, AtomAge, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import endStudy from '../../models/process/endStudy';
import useStudy from '../../models/util-hooks/useStudy';
import { isAlphabet } from '../../models/Utils';
import { Copyright } from '../footer/Copyright';
import PhraseList from '../phrase/PhraseList';
import PublicAnswers from '../publicAnswers/PublicAnswers';
import Review from './Review';
import WriteEnglish from './WriteEnglish';
import WriteJapanese from './WriteJapanese';


const japaneseFirstSteps = [
    {
        step: "Japanese",
        stepTitle: "日本語で意見を書く",
        component: <WriteJapanese />
    },
    {
        step: "English",
        stepTitle: "英語で意見を書く",
        component: <WriteEnglish />
    },
    {
        step: "Review",
        stepTitle: "お手本と比べる",
        component: <Review />
    }
]

const englishFirstSteps = [
    {
        step: "English",
        stepTitle: "英語で意見を書く",
        component: <WriteEnglish englishFirst={true} />
    },
    {
        step: "Japanese",
        stepTitle: "日本語で意見を書く",
        component: <WriteJapanese englishFirst={true} />
    },
    {
        step: "Review",
        stepTitle: "お手本と比べる",
        component: <Review />
    }
]

interface Props {
    categorySlug?: string
}

export default function StudyMainFrame(props: Props) {

    //WARN: AtomEnglishFirstWithPersistence使うとレイアウト壊れる
    const [englishFirst, setEnglishFirst] = useState(false)

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [errorMessage, setErrorMessage] = useState("")

    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [translation, setTranslation] = useAtom(AtomTranslation)
    const [___, setAtomAge] = useAtom(AtomAge)
    const { savePrevStudiedCategory } = useStudy()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)

    const steps = englishFirst ? englishFirstSteps : japaneseFirstSteps
    const activeStep = steps[activeStepIndex]

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

    useEffect(() => {
        if (props.categorySlug) {
            savePrevStudiedCategory(props.categorySlug)
        }
    }, [props.categorySlug])

    useEffect(() => {
        const getTopic = async () => {
            try {
                const res = await StudyApi.getTopic()
                setActiveQuestion({ topicId: res.topicId, title: res.topicTitle, description: res.topicDescription })
            } catch (e) {
                console.warn(e)
                router.push(`/q/${props.categorySlug || "normal"}/start`)
            }
        }
        getTopic()
    }, [])

    //router
    const router = useRouter()

    const skipStudy = async () => {
        setJapanese("")
        setEnglish("")
        setTranslation("")
        setAtomAge(0)

        await endStudy(activeQuestion.topicId)

        router.push(`/record/${props.categorySlug}`)
        return
    }

    const handleNext = async () => {
        if (activeStepIndex === steps.length - 1) {
            //最後のステップ

            //初期化
            setJapanese("")
            setEnglish("")
            setTranslation("")
            setAtomAge(0)
            router.push(`/record/${props.categorySlug}`)
            return
        }

        // API飛ばしてエラー返ってきたらエラーハンドリングする
        if (activeStep.step === "Japanese") {
            //非同期で翻訳を実施する
            StudyApi.translate(japanese, activeQuestion.title).then(resTranslation => {
                setTranslation(resTranslation.translation)
            })

            if (isAlphabet(japanese)) {
                setErrorMessage("日本語で記載してください(先頭がアルファベットです)")
                return
            }

            const res = await StudyApi.sendJapanese(japanese)
            if (!res.success) {
                setErrorMessage(res.message)
                return
            }



        } else if (activeStep.step === "English") {

            if (!isAlphabet(english)) {
                setErrorMessage("英語で記載してください(先頭がアルファベットでないです)")
                return
            }

            const res = await StudyApi.sendEnglish(english)
            if (!res.success) {
                setErrorMessage(res.message)
                return
            }

        }

        if (activeStepIndex === 1) {
            //ここに持っていく(WHY??)
            await endStudy(activeQuestion.topicId)
        }

        setErrorMessage("")
        setActiveStepIndex(activeStepIndex + 1);
    };

    const handleBack = () => {
        setEnglish("")
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

    const renderPublicAnswers = () => {
        if (activeStep.step === "Review") {
            return <div style={{ marginTop: 30 }}>
                <PublicAnswers />
            </div>
        }
    }

    const renderButtons = () => {
        if (activeStep.step === "Japanese") {
            return (
                <>
                    {englishFirst && <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        英語入力に戻る
                    </Button>}
                    {NextButton("次へ進む", japanese.length === 0)}
                </>
            )
        } else if (activeStep.step === "English") {
            return (
                <>
                    {!englishFirst && <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        日本語入力に戻る
                    </Button>}
                    {NextButton("次へ進む", english.length === 0)}
                </>
            )
        } else if (activeStep.step === "Review") {
            return (
                <>
                    <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        英語入力に戻る
                    </Button>
                    {NextButton("終了", false)}
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
                    <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 10 }}>
                        {steps[activeStepIndex].stepTitle}
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

                        {renderPublicAnswers()}
                    </React.Fragment>
                </Paper>
                <div style={{ textAlign: "right", marginRight: 10, marginTop: 10, marginBottom: 10 }}>
                    <Typography
                        onClick={skipStudy}
                        variant="overline"
                        style={{ cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
                        skip→
                    </Typography>
                    <br />
                    <Typography variant="caption">
                        (※Skipした場合もハートを消費します)
                    </Typography>
                </div>
                <div style={{ height: 10 }} />
                <Copyright />
            </main>
        </React.Fragment >
    );
}