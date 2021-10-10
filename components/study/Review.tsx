import { Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import DetailsIcon from '@material-ui/icons/Details';
import classes from "./style.module.css"
import { useAtom } from 'jotai';
import { AtomEnglish, AtomQuestionNeedRetry, AtomTranslation } from '../../models/jotai/StudyJotai';
import { StudyApi } from '../../api/StudyApi';
import { RecordApi } from '../../api/RecordApi';

var similarity = require('string-cosine-similarity')

export default function Review() {
    const [scoreValue, setScore] = useState(0)

    const [english] = useAtom(AtomEnglish)
    const [translation] = useAtom(AtomTranslation)

    const [visibleDiff, setVisibleDiff] = useState(false)
    const [needRetry, setNeedRetry] = useAtom(AtomQuestionNeedRetry)

    useEffect(() => {
        const similarityValue = similarity(english, translation)
        const _score = Math.round(similarityValue * 100)
        setScore(_score)

        //初回のスコアを送信する
        RecordApi.submitScore(_score)

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
            )
        } else {
            return (
                <>
                    <Typography variant="h6" style={{ marginBottom: "10px" }}>お手本の英語を暗記して復習しよう</Typography>

                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                        {english}
                    </Paper>

                    <div className={classes.arrow_box} >
                        <DetailsIcon />
                        <span>お手本の英語</span>
                    </div>

                    <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px" }}>
                        {translation}
                    </Paper>
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