import { Button, Paper } from "@mui/material"
import TextToSpeechButton from "../speech/TextToSpeechButton"
import TranslationCard from "../study/TranslationCard"

interface Props {
    hide: boolean
    studySessionId: string
    handleClickOtehon: (studySessionId: string) => void
    translation: string
    english?: string
}

export default (props: Props) => {
    if (props.hide) {
        return <Paper elevation={0} style={{
            backgroundColor: "#FF6347",
            opacity: 0.9,
            padding: "20px", textAlign: "center", color: "white"
        }}
            onClick={() => props.handleClickOtehon(props.studySessionId)}>
            お手本を見る
        </Paper>
    }

    return <>
        <div style={{ position: "relative" }}>
            <TranslationCard
                translation={props.translation}
                english={props.english}
            />
            <div style={{ position: "absolute", right: 40, bottom: 0 }}>
                <Button onClick={() => props.handleClickOtehon(props.studySessionId)}>お手本を隠して覚える</Button>
            </div>
            <TextToSpeechButton text={props.translation} />
        </div>

    </>
}