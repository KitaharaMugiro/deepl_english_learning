import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useCountdownTimer } from 'use-countdown-timer';
import { AtomEnglish, AtomJapanse } from '../../models/jotai/StudyJotai';
import useTimer from '../timer/useTimer';
import QuestionText from './QuestionText';
import styles from "./style.module.css";

export default function WriteEnglish() {
    const [displayModal, setDisplayModal] = useState(true)
    const { start, view } = useTimer(1000 * 60 * 2)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [japanese] = useAtom(AtomJapanse)

    const onClickModal = () => {
        start()
        setDisplayModal(false)
    }


    return (
        <React.Fragment>
            <QuestionText />

            <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                {japanese}
            </Paper>

            <div className={styles.write_english_box}>
                <div
                    style={{ display: displayModal ? "inherit" : "none" }}
                    className={styles.ready_modal} onClick={onClickModal}>
                    <p style={{ fontSize: "18px", color: "black" }}>
                        2分間で上の文章を<span style={{ fontWeight: 700 }}>英語</span>にしてください<br />
                        準備ができたらここをクリック
                    </p>
                </div>

                <TextField
                    label="上の文章を英語にしてください"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={english}
                    onChange={e => setEnglish(e.target.value)}
                />
                残り {view}
            </div>
        </React.Fragment >
    );
}