import { Button, Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import { RecordApi } from '../../api/RecordApi';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
import DetailScoreBoard from './DetailScoreBoard';
import SuggestWordsList from './SuggestWordsList';
import YourEnglishAndTranslationView from './YourEnglishAndTranslationView';

export default function Review() {

    const [english] = useAtom(AtomEnglish)
    const [japanese] = useAtom(AtomJapanse)
    const [translation] = useAtom(AtomTranslation)
    const [activeQuestion] = useAtom(AtomActiveQuestion)


    useEffect(() => {
        //スコアや年齢を取得する
        const client = new ApiSpecialClient()
        client.englishScore(english, translation).then(res => {
            const _score = Math.round(res.scoreRaw)
            const _age = res.age

            //初回のスコアを送信する
            RecordApi.submitScore(_score, _age)
            RecordApi.submitDashboard(_score, english, translation, activeQuestion.topicId, japanese, _age)
        })

    }, [])

    return (
        <React.Fragment>

            <DetailScoreBoard
                text={english}
                translation={translation}
            />

            <h2 style={{ fontWeight: 700 }} >
                {activeQuestion.title}
            </h2>

            <p style={{ color: "#677284", marginTop: "15px" }}>
                {activeQuestion.description}
            </p>

            <Typography
                variant="subtitle2"
                style={{ marginBottom: 0, marginTop: 10 }}>
                日本語で書いた意見
            </Typography>
            <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                {japanese}
            </Paper>

            <Typography
                variant="subtitle2"
                style={{ marginBottom: 0, marginTop: 10 }}>
                英語で書いた意見
            </Typography>

            <YourEnglishAndTranslationView
                english={english}
                translation={translation}
            />

            <div style={{ height: 25 }} />

            <SuggestWordsList
                english={english}
                translation={translation} />

            <div style={{ height: 15 }} />

            <DictionarySearchSelector />
        </React.Fragment>
    );
}

