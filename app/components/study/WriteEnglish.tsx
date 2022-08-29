import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button, IconButton, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import { AtomEnglish, AtomJapanse, AtomTranslation } from '../../models/jotai/StudyJotai';
import usePhrase from '../../models/util-hooks/usePhrase';
import SpeechRecognitionView from '../speech/SpeechRecognitionView';
import useTimer from '../timer/useTimer';
import PickModeInput from './PickModeInput';
import QuestionText from './QuestionText';
import styles from "./style.module.css";

interface Props {
    englishFirst?: boolean
    fromDiary?: boolean
}

export default (props: Props) => {
    const englishFirst = props.englishFirst || false;
    const { openPhraseList } = usePhrase()
    const [displayModal, setDisplayModal] = useState(true)
    const { start, view } = useTimer(1000 * 60 * 2)
    const [english, setEnglish] = useAtom(AtomEnglish)
    const [japanese] = useAtom(AtomJapanse)
    const [translation] = useAtom(AtomTranslation)
    const { browserSupportsSpeechRecognition } = useSpeechRecognition();
    const displayRecordButton = browserSupportsSpeechRecognition;

    const [speechRecognitionNow, setSpeechRecognitionNow] = useState(false)
    const [pickMode, setPickMode] = useState(false)

    const textDiaryOrOpinion = props.fromDiary ? "日記" : "意見"
    const textFieldPlaceholder = englishFirst ? `英語で${textDiaryOrOpinion}を書いてください` : "上の文章を英語にしてください"
    const firstDescription = () => {
        if (englishFirst) {
            return (
                <p style={{ fontSize: "18px", color: "black" }}>
                    2分間であなたの{textDiaryOrOpinion}を<span style={{ fontWeight: 700 }}>英語</span>で記述してください。<br />
                    準備ができたらここをクリック
                </p>)
        }
        return (
            <p style={{ fontSize: "18px", color: "black" }}>
                2分間で上の文章を<span style={{ fontWeight: 700 }}>英語</span>にしてください<br />
                準備ができたらここをクリック
            </p>)
    }

    const onClickStartSpeechRecognition = () => {
        setSpeechRecognitionNow(true)
        setPickMode(false)
    }

    const onClickStartPickMode = () => {
        if (translation.length === 0) return
        setPickMode(true)
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

    const addText = (text: string) => {
        const newText = english + " " + text
        setEnglish(newText.trim())
    }

    const renderOtherOptionIcons = () => {
        if (english.length !== 0) return null
        if (displayRecordButton) {
            return (
                <div>
                    <IconButton
                        onClick={onClickStartSpeechRecognition}
                        color="primary"
                        style={{
                            position: "absolute",
                            bottom: "0px",
                            right: "20px",
                            width: 60, height: 60
                        }}
                        edge="end"
                    >
                        <KeyboardVoiceIcon style={{ width: 60, height: 60, padding: 10 }} />
                    </IconButton>
                    {translation.length !== 0 &&
                        <IconButton
                            onClick={onClickStartPickMode}
                            color="primary"
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                right: "80px",
                                width: 60, height: 60
                            }}
                            edge="end"
                        >
                            <KeyboardAltIcon style={{ width: 60, height: 60, padding: 10 }} />
                        </IconButton>}
                </div>
            )
        } else {
            return (
                <div>
                    <IconButton
                        onClick={onClickStartPickMode}
                        color="primary"
                        style={{
                            position: "absolute",
                            bottom: "0px",
                            right: "20px",
                            width: 60, height: 60
                        }}
                        edge="end"
                    >
                        <KeyboardAltIcon style={{ width: 60, height: 60, padding: 10 }} />
                    </IconButton>
                </div>
            )
        }
    }

    const renderInputView = () => {
        if (speechRecognitionNow) {
            return <SpeechRecognitionView
                onEnd={onFinishSpeechRecognition} />
        } else if (pickMode) {
            return <div>
                <TextField
                    label={textFieldPlaceholder}
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={english}
                    onChange={e => setEnglish(e.target.value)}
                >
                </TextField>
                <div style={{ marginTop: 30, }}>
                    <PickModeInput addText={addText} />
                </div>
            </div>
        } else {
            return (
                <div style={{ position: "relative" }}>
                    <TextField
                        label={textFieldPlaceholder}
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={english}
                        onChange={e => setEnglish(e.target.value)}
                    >
                    </TextField>
                    {renderOtherOptionIcons()}
                </div>
            )
        }
    }


    return (
        <React.Fragment>
            <QuestionText displayLanguage='english' />

            {japanese &&
                <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                    {japanese}
                </Paper>}

            <div className={styles.write_english_box}>
                <div
                    style={{ display: displayModal ? "inherit" : "none" }}
                    className={styles.ready_modal} onClick={onClickModal}>
                    {firstDescription()}
                </div>

                {renderInputView()}

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