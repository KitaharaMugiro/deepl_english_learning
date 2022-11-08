import { Paper, TextField, IconButton, Card, Button } from "@mui/material"
import styles from "ab-react-diff-viewer/lib/styles"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GetTodayTopicResponse, TodayApi } from "../../api/TodayApi"
import { AtomActiveQuestion, AtomJapanse } from "../../models/jotai/StudyJotai"
import PublicJapaneseList from "../publicAnswers/PublicJapaneseList"
import QuestionText from "../study/QuestionText"
import WriteJapanese from "../study/WriteJapanese"

export default () => {
    const textFieldPlaceholder = "日本語で意見を書いてください"
    const [japanese, setJapanese] = useAtom(AtomJapanse)
    const [isLoading, setIsLoading] = useState(false)
    const [todayTopic, setTodayTopic] = useState<GetTodayTopicResponse>()
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)
    const [disable, setDisable] = useState(false)
    const router = useRouter()
    const topicId = todayTopic?.question.topicId
    useEffect(() => {
        setIsLoading(true)
        //user idにアクセスするのでフロントからじゃないと呼べない
        TodayApi.getTodayTopic().then(res => {
            setTodayTopic(res)
            setIsLoading(false)
            setActiveQuestion(res.question)
        })
    }, [])

    const handleNext = () => {
        router.push(`/today?fromTop=true`)
        setDisable(true)
    }

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
                    value={japanese}
                    onChange={e => setJapanese(e.target.value)}
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
                    onClick={handleNext}
                    disabled={disable}
                    style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}
                >
                    次へ進む(無料)
                </Button>
            </div>
        </Card>
    )
}