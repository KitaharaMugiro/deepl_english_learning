import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button, IconButton, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import { AtomEnglish, AtomJapanse } from '../../models/jotai/StudyJotai';
import usePhrase from '../../models/util-hooks/usePhrase';
import SpeechRecognitionView from '../speech/SpeechRecognitionView';
import useTimer from '../timer/useTimer';
import QuestionText from './QuestionText';
import styles from "./style.module.css";

export default function WriteEnglish() {
    const { openPhraseList } = usePhrase()
    const [displayModal, setDisplayModal] = useState(true)
    const { start, view } = useTimer(1000 * 60 * 2)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [japanese] = useAtom(AtomJapanse)
    const { browserSupportsSpeechRecognition } = useSpeechRecognition();
    const displayRecordButton = browserSupportsSpeechRecognition && english.length === 0;

    const [speechRecognitionNow, setSpeechRecognitionNow] = useState(false)
    const onClickStartSpeechRecognition = () => {
        setSpeechRecognitionNow(true)
    }

    const onFinishSpeechRecognition = (text: string) => {
        setEnglish(text)
        setSpeechRecognitionNow(false)
    }


    const onClickModal = () => {
        start()
        setDisplayModal(false)
    }

    const [displayTime, setDisplayTIme] = useState(true)
    const onClickTimeGetAway = () => {
        setDisplayTIme(!displayTime)
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

                {speechRecognitionNow ?
                    <SpeechRecognitionView
                        onEnd={onFinishSpeechRecognition} />
                    :
                    <div style={{ position: "relative" }}>
                        <TextField
                            label="上の文章を英語にしてください"
                            multiline
                            rows={4}
                            variant="outlined"
                            style={{ width: "100%" }}
                            value={english}
                            onChange={e => setEnglish(e.target.value)}
                        >
                        </TextField>
                        {displayRecordButton ?
                            <IconButton
                                onClick={onClickStartSpeechRecognition}
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    right: "20px",
                                    width: 60, height: 60
                                }}
                                edge="end"
                            >
                                <KeyboardVoiceIcon style={{ width: 60, height: 60, padding: 10 }} />
                            </IconButton> : <div />
                        }
                    </div>
                }

                {displayTime ?
                    <div><span style={{ width: 50 }}>
                        残り {view}
                    </span><IconButton size="small" onClick={onClickTimeGetAway}><RemoveCircleIcon /></IconButton> </div>
                    : <IconButton size="small" onClick={onClickTimeGetAway}><AddCircleIcon /></IconButton>}
                <Button onClick={openPhraseList}>フレーズリストを開く</Button>
            </div>
        </React.Fragment >
    );
}