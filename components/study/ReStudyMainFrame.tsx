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
import { LeftHeartsAtom } from '../../models/jotai/LeftHearts';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomQuestionNeedRetry, AtomTranslation } from '../../models/jotai/StudyJotai';
import endStudy from '../../models/process/endStudy';
import usePlan from '../../models/util-hooks/usePlan';
import { Copyright } from '../footer/Copyright';
import Review from './Review';
import WriteEnglish from './WriteEnglish';
import WriteJapanese from './WriteJapanese';


const steps = ['Japanese', 'English', 'Review'];
const stepTitles = ["日本語で意見を書く", "英語にする", "お手本と比べる"]

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <WriteJapanese />;
        case 1:
            return <WriteEnglish />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

interface Props {
    studySessionId?: string
}

export default function ReStudyMainFrame(props: Props) {
    const [activeStep, setActiveStep] = useState(0);
    const [needRetry] = useAtom(AtomQuestionNeedRetry)
    const [errorMessage, setErrorMessage] = useState("")

    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [translation, setTranslation] = useAtom(AtomTranslation)
    const [_, setNeedRetry] = useAtom(AtomQuestionNeedRetry)

    const [leftHearts, setLeftHearts] = useAtom(LeftHeartsAtom)
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const { openPlanModal } = usePlan()

    useEffect(() => {
        const getTopic = async () => {
            if (!props.studySessionId) return
            try {
                const res = await StudyApi.restudyStart(props.studySessionId)
                setActiveQuestion({ topicId: res.topicId, title: res.topicTitle, description: res.topicDescription })
                setJapanese(res.japanese)
            } catch (e) {
                console.warn(e)
                openPlanModal()
                router.push(`/dashboard`)

            }
            StudyApi.leftHeart().then(({ leftHeart }) => {
                setLeftHearts(leftHeart)
            })
        }
        getTopic()
    }, [props.studySessionId])

    //router
    const router = useRouter()

    const handleNext = async () => {
        if (activeStep === steps.length - 1) {
            //最後のステップ

            //初期化
            setJapanese("")
            setEnglish("")
            setTranslation("")
            setNeedRetry(false)

            router.push(`/dashboard`)
            return
        }

        // API飛ばしてエラー返ってきたらエラーハンドリングする
        if (activeStep === 0) {
            const res = await StudyApi.sendJapanese(japanese)
            if (!res.success) {
                setErrorMessage(res.message)
                return
            }
        } else if (activeStep === 1) {
            const res = await StudyApi.sendEnglish(english)
            if (!res.success) {
                setErrorMessage(res.message)
                return
            }
            const resTranslation = await StudyApi.translate(japanese)
            setTranslation(resTranslation.translation)
        }

        setErrorMessage("")
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setEnglish("")
        setActiveStep(activeStep - 1);
    };

    const NextButton = (text: string) => (
        <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
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
                NextButton("次へ進む")
            )
        } else if (activeStep === 1) {
            return (
                <>
                    <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        日本語入力に戻る
                    </Button>
                    {NextButton("次へ進む")}
                </>
            )
        } else if (activeStep === 2) {
            if (needRetry) {
                return (
                    <Button onClick={handleBack}
                        variant="contained"
                        color="primary"
                        style={{
                            marginTop: "30px",
                            marginLeft: "10px",
                        }}>
                        お手本を暗記してもう一回挑戦
                    </Button>
                )
            }
            return (
                <>
                    <Button onClick={handleBack} style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}>
                        英語入力に戻る
                    </Button>
                    {NextButton("終了")}
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
                    marginBottom: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    {/* タイトル(ご希望あれば) */}
                    <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 10 }}>
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
                <Copyright />
            </main>
        </React.Fragment >
    );
}