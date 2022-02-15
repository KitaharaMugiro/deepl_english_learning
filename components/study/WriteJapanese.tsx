import { Button, IconButton, TextField } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { AtomActiveQuestion, AtomJapanse } from '../../models/jotai/StudyJotai';
import useTimer from '../timer/useTimer';
import QuestionText from './QuestionText';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from "./style.module.css";
import PublicJapaneseList from '../publicAnswers/PublicJapaneseList';


export default function WriteJapanese() {
    const [displayModal, setDisplayModal] = useState(true)
    const { start, view } = useTimer(1000 * 60 * 1)
    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [activeQuestion] = useAtom(AtomActiveQuestion)


    const onClickModal = () => {
        start()
        setDisplayModal(false)
    }

    const onChangeJapanese = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault()
        setJapanese(event.target.value)
    }

    const [displayTime, setDisplayTIme] = useState(true)
    const onClickTimeGetAway = () => {
        setDisplayTIme(!displayTime)
    }

    return (
        <React.Fragment>
            <QuestionText />

            <div className={styles.write_japanese_box}>
                <div
                    style={{ display: displayModal ? "inherit" : "none" }}
                    className={styles.ready_modal} onClick={onClickModal}>
                    <p style={{ fontSize: "18px", color: "black" }}>
                        1分間であなたの意見を<span style={{ fontWeight: 700 }}>日本語</span>で記述してください。<br />
                        日本語の内容もスコアに反映されます。<br />
                        準備ができたらここをクリック
                    </p>
                </div>

                <TextField
                    label="日本語で意見を書いてください"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={japanese}
                    onChange={e => onChangeJapanese(e)}
                />

                {displayTime ?
                    <div><span style={{ width: 50 }}>
                        残り {view}
                    </span><IconButton size="small" onClick={onClickTimeGetAway}><RemoveCircleIcon /></IconButton> </div>
                    : <IconButton size="small" onClick={onClickTimeGetAway}><AddCircleIcon /></IconButton>}
                <PublicJapaneseList topicId={Number(activeQuestion.topicId)} />
            </div>
        </React.Fragment >
    );
}