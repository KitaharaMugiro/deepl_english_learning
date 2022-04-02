import { Button, Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import { RecordApi } from '../../api/RecordApi';
import { StudyApi } from '../../api/StudyApi';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import { Question } from '../../models/type/Question';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
import DetailScoreBoard from './DetailScoreBoard';
import SuggestWordsList from './SuggestWordsList';
import YourEnglishAndTranslationView from './YourEnglishAndTranslationView';

interface Props {
    english?: string
    japanese?: string
    translation?: string
    activeQuestion?: Question
    fromResultPage?: boolean
}

export default (props: Props) => {
    const [_english] = useAtom(AtomEnglish)
    const [_japanese] = useAtom(AtomJapanse)
    const [_translation] = useAtom(AtomTranslation)
    const [_activeQuestion] = useAtom(AtomActiveQuestion)

    const english = props.english || _english
    const japanese = props.japanese || _japanese
    const translation = props.translation || _translation
    const activeQuestion = props.activeQuestion || _activeQuestion

    const [resultId, setResultId] = useState('')

    useEffect(() => {
        //スコアや年齢を取得する
        const client = new ApiSpecialClient()
        client.englishScore(english, translation).then(res => {
            const _score = Math.round(res.scoreRaw)
            const _age = res.age

            //初回のスコアを送信する
            RecordApi.submitScore(_score, _age)
            RecordApi.submitDashboard(_score, english, translation, activeQuestion.topicId, japanese, _age)

            //結果を送信(結果ページから飛んできている場合は送信しない)
            if (!props.fromResultPage) {
                StudyApi.sendResult(
                    _score,
                    activeQuestion.topicId,
                    english,
                    translation,
                    japanese,
                    _age
                ).then(res => {
                    setResultId(res.resultId)
                })
            }
        })

    }, [])

    return (
        <React.Fragment>

            <DetailScoreBoard
                text={english}
                translation={translation}
                resultId={resultId}
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

