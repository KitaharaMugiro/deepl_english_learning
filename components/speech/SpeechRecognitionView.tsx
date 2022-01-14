import { Button } from '@mui/material';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ListeningMicrophone from './ListeningMicrophone';

interface Props {
    language?: string
    onEnd: (text: string) => void
}

export default (props: Props) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const startListening = () => {
        SpeechRecognition.startListening({
            language: props.language || "en-US",
            continuous: true
        })
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
    }

    const onClickMicrophone = () => {
        if (listening) {
            stopListening()
        } else {
            startListening()
        }
    }

    const onClickOK = () => {
        props.onEnd(transcript)
        stopListening()
        resetTranscript()
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <ListeningMicrophone pulsing={listening} onClick={onClickMicrophone} />
            <p>{transcript}</p>
            <div>
                <Button
                    style={{ marginRight: 15 }}
                    variant="outlined" onClick={resetTranscript} color="warning">Reset</Button>
                <Button variant="contained" onClick={onClickOK}>OK</Button>
            </div>
        </div>
    );
};