import { Button, Card, TextField } from "@mui/material"
import { propsToClassKey } from "@mui/styles"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { GetTodayTopicResponse, TodayApi } from "../../api/TodayApi"
import { AtomActiveQuestion } from "../../models/jotai/StudyJotai"
import PublicJapaneseList from "../publicAnswers/PublicJapaneseList"
import QuestionText from "../study/QuestionText"

interface Props {
    english: string
    setEnglish: (english: string) => void
    onClickNext: () => void
    loading: boolean
}
export default (props: Props) => {
    const textFieldPlaceholder = "お題に沿って英語であなたの意見を書いてみましょう"
    const [todayTopic, setTodayTopic] = useState<GetTodayTopicResponse>()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const [disable, setDisable] = useState(false)
    const topicId = todayTopic?.question.topicId
    useEffect(() => {
        TodayApi.getTodayTopic().then(res => {
            setTodayTopic(res)
            setActiveQuestion(res.question)
        })
    }, [])

    if (!topicId) {
        return <div></div>
    }
    return (
        <Card style={{ padding: 20 }}>
            <QuestionText displayLanguage='japanese' />

            <div style={{
                position: "relative",
                marginTop: 20
            }}>
                <TextField
                    label={textFieldPlaceholder}
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={props.english}
                    onChange={e => props.setEnglish(e.target.value)}
                />

                <PublicJapaneseList topicId={Number(topicId)} clickable={true} />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.onClickNext}
                    disabled={props.loading || disable}
                    style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}
                >
                    {props.loading ? "少し待ってね..." : "AIに添削してもらう"}

                </Button>
            </div>
        </Card>
    )
}