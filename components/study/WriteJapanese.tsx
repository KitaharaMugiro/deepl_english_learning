import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { AtomActiveQuestion, AtomJapanse } from '../../models/jotai/StudyJotai';
import useTimer from '../timer/useTimer';
import QuestionText from './QuestionText';
import styles from "./style.module.css";
export default function WriteJapanese() {
    const [displayModal, setDisplayModal] = useState(true)
    const { start, view } = useTimer(1000 * 60 * 1)
    const [japanese, setJapanese] = useAtom(AtomJapanse)

    const onClickModal = () => {
        start()
        setDisplayModal(false)
    }

    const onChangeJapanese = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault()
        setJapanese(event.target.value)
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

                残り {view}
            </div>
        </React.Fragment >
    );
}