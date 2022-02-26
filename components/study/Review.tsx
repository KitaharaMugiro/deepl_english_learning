import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Paper, Typography } from '@mui/material';
import ReactDiffViewer, { DiffMethod } from 'ab-react-diff-viewer';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import { RecordApi } from '../../api/RecordApi';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
import TextToSpeechButton from '../speech/TextToSpeechButton';
import DetailScoreBoard from './DetailScoreBoard';
import classes from "./style.module.css";

export default function Review() {

    const [scoreValue, setScore] = useState(0)

    const [english] = useAtom(AtomEnglish)
    const [japanese] = useAtom(AtomJapanse)
    const [translation] = useAtom(AtomTranslation)
    const [activeQuestion] = useAtom(AtomActiveQuestion)

    const [visibleDiff, setVisibleDiff] = useState(false)

    useEffect(() => {
        //スコアや年齢を取得する
        const client = new ApiSpecialClient()
        client.englishScore(english, translation).then(res => {
            const _score = Math.round(res.scoreRaw)
            const _age = res.age

            //初回のスコアを送信する
            RecordApi.submitScore(_score, _age)
            RecordApi.submitDashboard(_score, english, translation, activeQuestion.topicId, japanese, _age)

            setScore(_score)

            if (_score > 85) {
                setVisibleDiff(true)
            } else {
                setVisibleDiff(false)
            }
        })

    }, [])

    const onSearchOnDictionary = (html: any, text: string) => {
        window.open('https://ejje.weblio.jp/content/' + text, '_blank');
    }

    const renderJapanese = () => {
        return <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
            {japanese}
        </Paper>
    }

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
                    <Typography variant="h6" style={{ marginBottom: "10px", marginTop: 10 }}>お手本の英語を暗記して復習しよう</Typography>

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

            <DetailScoreBoard
                text={english}
                translation={translation}
            />

            <Typography variant="body1">English Score: {scoreValue}</Typography>

            <div style={{ height: 15 }} />
            {renderJapanese()}
            {renderDiffOrReview()}

            <DictionarySearchSelector />
        </React.Fragment>
    );
}

