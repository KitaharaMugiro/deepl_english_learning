import { ApolloQueryResult } from '@apollo/client/core/types';
import { Alert, FormControlLabel, Snackbar, Switch } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { DiaryApi } from '../../api/DiaryApi';
import { StudyApi } from '../../api/StudyApi';
import { BackdropAtom } from '../../models/jotai/Backdrop';
import { AtomActiveQuestion, AtomAge, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import useStudy from '../../models/util-hooks/useStudy';
import useUser from '../../models/util-hooks/useUser';
import { isAlphabet } from '../../models/Utils';
import { Exact, ListMyDiaryQuery, useCreateDiaryMutation, useListMyDiaryQuery } from '../../src/generated/graphql';
import Review from '../study/Review';
import WriteEnglish from '../study/WriteEnglish';
import WriteJapanese from '../study/WriteJapanese';


const japaneseFirstSteps = [
    {
        step: "Japanese",
        stepTitle: "日本語で日記を書く",
        component: <WriteJapanese />
    },
    {
        step: "English",
        stepTitle: "英語で日記を書く",
        component: <WriteEnglish fromDiary={true} />
    },
    {
        step: "Review",
        stepTitle: "お手本と比べる",
        component: <Review fromDiary={true} />
    }
]

const englishFirstSteps = [
    {
        step: "English",
        stepTitle: "英語で日記を書く",
        component: <WriteEnglish englishFirst={true} fromDiary={true} />
    },
    {
        step: "Review",
        stepTitle: "お手本と比べる",
        component: <Review fromDiary={true} />
    }
]

interface Props {
    categorySlug?: string
    refetch: (variables?: Partial<Exact<{
        userId: string;
    }>> | undefined) => Promise<ApolloQueryResult<ListMyDiaryQuery>>
}

export default function WriteDiaryMainFrame(props: Props) {

    const { user } = useUser()

    //TODO とりあえず英語モードだけ作る
    const [englishFirst, setEnglishFirst] = useState(true)

    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [errorMessage, setErrorMessage] = useState("")

    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [translation, setTranslation] = useAtom(AtomTranslation)
    const [___, setAtomAge] = useAtom(AtomAge)
    const { savePrevStudiedCategory } = useStudy()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const [createDiaryMutation] = useCreateDiaryMutation();
    const [_, setOpenLoading] = useAtom(BackdropAtom)

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

    const handleNext = async () => {
        //最後のステップ
        if (activeStepIndex === steps.length - 1) {
            //ログイン時は日記の保存
            if (user) {
                setOpenLoading(true)
                await createDiaryMutation({
                    variables: {
                        userInputText: english,
                        protected: true,
                        translatedEnglish: translation,
                        translatedJapanese: japanese,
                        userInputEnglish: english,
                    },
                })
                await props.refetch()
                setOpenLoading(false)

            }

            //初期化
            setJapanese("")
            setEnglish("")
            setTranslation("")
            setAtomAge(0)
            setActiveStepIndex(0)
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
            setOpenLoading(true)
            const res = await StudyApi.sendEnglish(english)
            if (!res.success) {
                setErrorMessage(res.message)
                setOpenLoading(false)
                return
            }

            if (englishFirst) {
                const resTranslation = await DiaryApi.translateDiary(english);
                setJapanese(resTranslation.translatedJapanese)
                setTranslation(resTranslation.translatedEnglish)
                console.log("resTranslation", resTranslation)
            }
            setOpenLoading(false)


        }

        setErrorMessage("")
        setActiveStepIndex(activeStepIndex + 1);
    };

    const handleBack = () => {
        setEnglish("")
        if (englishFirst) {
            setJapanese("")
            setTranslation("")
        }
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
                    {NextButton(user ? "保存" : "終了", false)}
                </>
            )
        }
    }

    return (
        <React.Fragment>
            <main style={{
                width: 'auto',
                maxWidth: "800px",
                marginRight: "auto",
                marginLeft: "auto",
            }}>
                {/* TODO 日本語モード */}
                {/* <FormControlLabel
                    style={{
                        marginTop: "10px",
                    }}
                    checked={englishFirst}
                    onChange={() => setEnglishFirst(!englishFirst)}
                    control={
                        <Switch />
                    }
                    label={<b
                        onClick={() => setEnglishFirst(!englishFirst)}>英語で書く</b>}
                /> */}
                <Paper style={{
                    padding: "20px",
                    maxWidth: "800px",
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

                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment >
    );
}
