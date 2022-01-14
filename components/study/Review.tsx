import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import { RecordApi } from '../../api/RecordApi';
import { AtomActiveQuestion, AtomEnglish, AtomQuestionNeedRetry, AtomTranslation } from '../../models/jotai/StudyJotai';
import TextToSpeechButton from '../speech/TextToSpeechButton';
import classes from "./style.module.css";

var similarity = require('string-cosine-similarity')

export default function Review() {
    const [scoreValue, setScore] = useState(0)

    const [english] = useAtom(AtomEnglish)
    const [translation] = useAtom(AtomTranslation)
    const [activeQuestion] = useAtom(AtomActiveQuestion)

    const [visibleDiff, setVisibleDiff] = useState(false)
    const [needRetry, setNeedRetry] = useAtom(AtomQuestionNeedRetry)

    useEffect(() => {
        const similarityValue = similarity(english, translation)
        const _score = Math.round(similarityValue * 100)
        setScore(_score)

        //初回のスコアを送信する
        RecordApi.submitScore(_score)
        RecordApi.submitDashboard(_score, english, translation, activeQuestion.topicId)

        console.log({ _score })

        if (_score > 90) {
            setNeedRetry(false)
            setVisibleDiff(true)
        } else {
            setNeedRetry(true)
            setVisibleDiff(false)
        }
    }, [])

    const renderDiffOrReview = () => {
        if (visibleDiff) {
            return (
                <div style={{ position: "relative" }}>
                    <ReactDiffViewer
                        oldValue={english}
                        newValue={translation}
                        splitView={true}
                        hideLineNumbers={true}
                        showDiffOnly={false}
                        leftTitle="Yours"
                        rightTitle="お手本"
                        compareMethod={DiffMethod.WORDS}
                    />
                    <TextToSpeechButton text={translation} />
                </div>

            )
        } else {
            return (
                <>
                    <Typography variant="h6" style={{ marginBottom: "10px" }}>お手本の英語を暗記して復習しよう</Typography>

                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                        {english}
                    </Paper>

                    <div className={classes.arrow_box} >
                        <ArrowDownwardIcon />
                        <span>お手本の英語</span>
                    </div>

                    <div style={{ position: "relative" }}>
                        <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px" }}>
                            {translation}
                        </Paper>
                        <TextToSpeechButton text={translation} />
                    </div>

                </>
            )
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h5">English Score: <span color="#3f51b5">{scoreValue}</span></Typography>
            {renderDiffOrReview()}
        </React.Fragment>
    );
}