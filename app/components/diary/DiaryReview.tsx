import { Button, Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import { RecordApi } from '../../api/RecordApi';
import { StudyApi } from '../../api/StudyApi';
import { AtomActiveQuestion, AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import { LocalStorageHelper } from '../../models/localstorage/LocalStorageHelper';
import { Question } from '../../models/type/Question';
import useLevelUp from '../../models/util-hooks/useLevelUp';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
import NoteModal from '../mynote/NoteModal';
import AddIcon from '@mui/icons-material/Add';
import useSignin from '../../models/util-hooks/useSignin';
import useUser from '../../models/util-hooks/useUser';
import DetailScoreBoard from '../study/DetailScoreBoard';
import YourEnglishAndTranslationView from '../study/YourEnglishAndTranslationView';
import SuggestWordsList from '../study/SuggestWordsList';
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

    const { addExp } = useLevelUp()
    const [resultId, setResultId] = useState('')
    const { user } = useUser()
    const { openSignin } = useSignin()

    const [isOpenNote, setIsOpenNote] = useState(false);

    const openNote = () => {
        if (!user) {
            openSignin()
            return
        }
        setIsOpenNote(true);
    }


    if (!activeQuestion) {
        return null
    }
    return (
        <React.Fragment>

            <DetailScoreBoard
                text={english}
                translation={translation}
                resultId={resultId}
                fromDiary={true}
            />

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

            {!isOpenNote && <DictionarySearchSelector />}
        </React.Fragment>
    );
}

