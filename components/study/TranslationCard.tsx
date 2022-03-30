import { Paper } from "@mui/material"
import TextToSpeechButton from "../speech/TextToSpeechButton"
import Highlighter from "react-highlight-words";
import { useState, useEffect } from "react";
import { StudyApi } from "../../api/StudyApi";

interface Props {
    translation: string
    english?: string //比較用
}

export default (props: Props) => {
    const [words, setWords] = useState<{ headword: string, meaning: string, level: string }[]>([])
    const { english, translation } = props
    useEffect(() => {
        if (english && translation) {
            StudyApi.compare(english, translation).then(res => {
                setWords(res.userShouldRememberThisWords)
            })
        }
    }, [english, translation])

    return (<div style={{ position: "relative" }}>
        <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", paddingBottom: "40px", fontSize: "larger" }}>
            <Highlighter
                searchWords={words.map(w => w.headword)}
                highlightStyle={{ fontWeight: "bold", backgroundColor: "transparent" }}
                autoEscape={true}
                textToHighlight={props.translation}
            />
        </Paper>
        <TextToSpeechButton text={props.translation} />
        <TextToSpeechButton text={props.translation} />
    </div>)
}