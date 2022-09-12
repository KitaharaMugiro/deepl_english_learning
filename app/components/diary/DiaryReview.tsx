import { Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import { Question } from '../../models/type/Question';
import DetailScoreBoard from '../study/DetailScoreBoard';
import YourEnglishAndTranslationView from '../study/YourEnglishAndTranslationView';
import SuggestWordsList from '../study/SuggestWordsList';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
interface Props {
    english?: string
    japanese?: string
    translation?: string
    activeQuestion?: Question
    fromResultPage?: boolean
    fromDiary?: boolean
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

    if (!activeQuestion) {
        return null
    }
    return (
        <React.Fragment>

            <DetailScoreBoard
                text={english}
                translation={translation}
                fromDiary={true}
                resultId={''} />

            <Typography variant="h6" style={{ fontWeight: 700 }} >
                {activeQuestion.title}
            </Typography>

            <p style={{ color: "#677284", marginTop: 0 }}>
                {activeQuestion.description}
            </p>

            <Typography
                variant="subtitle2"
                style={{ marginBottom: 0, marginTop: 10 }}>
                英語から自動生成された日本語
            </Typography>
            <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                {japanese}
            </Paper>

            <Typography
                variant="subtitle2"
                style={{ marginBottom: 0, marginTop: 10 }}>
                お手本の英語と比較
            </Typography>

            <YourEnglishAndTranslationView
                english={english}
                translation={translation}
                fromDiary={true}
            />

            <SuggestWordsList
                english={english}
                translation={translation} />

            <div style={{ height: 15 }} />
            <DictionarySearchSelector />

        </React.Fragment>
    );
}

