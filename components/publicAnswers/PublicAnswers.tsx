import { Button, TextField, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { useState } from "react"
import { AtomJapanse, AtomEnglish, AtomTranslation, AtomQuestionNeedRetry, AtomActiveQuestion, AtomAge } from "../../models/jotai/StudyJotai"
import useUser from "../../models/util-hooks/useUser"
import { useQueryPublciAnswersQuery, useSubmitPublicAnswerMutation } from "../../src/generated/graphql"
import PublicAnswerCard from "./PublicAnswerCard"
export default () => {
    const [japanese] = useAtom(AtomJapanse)
    const [translation] = useAtom(AtomTranslation)
    const [english] = useAtom(AtomEnglish)
    const [age] = useAtom(AtomAge)
    const [_, setNeedRetry] = useAtom(AtomQuestionNeedRetry)
    const [activeQuestion, setActiveQuestion] = useAtom(AtomActiveQuestion)

    const [submitted, setSubmitted] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const { data, loading, error, refetch } = useQueryPublciAnswersQuery({
        variables: { topicId: Number(activeQuestion.topicId) }
    })
    const [submitPublicAnswer] = useSubmitPublicAnswerMutation()
    const { user } = useUser()


    const handleSubmit = async () => {
        setSubmitLoading(true)
        await submitPublicAnswer({
            variables: {
                topicId: Number(activeQuestion.topicId),
                answer: english,
                japanese: japanese,
                translation: translation,
                age: age
            }
        })
        await refetch()
        setSubmitLoading(false)
        setSubmitted(true)
    }

    const renderCards = () => {
        const cards = data?.englister_PublicAnswers.map((answer) => {
            return <div key={answer.id}>
                <PublicAnswerCard
                    answer={answer.answer}
                    description={answer.japanese}
                    age={answer.age} />
            </div>
        })
        if (cards?.length === 0) return <Typography variant="body1">まだ他の人は回答を投稿していません。</Typography>
        return cards
    }

    const renderSubmitForm = () => {
        if (!user) return <Typography variant="body1">ログインをして投稿しよう！</Typography>
        return <>{submitted ? <Typography variant="body1">回答を投稿しました。</Typography>
            : <div style={{ position: "relative" }}>
                <TextField
                    multiline
                    rows={3}
                    disabled
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={english}
                />
                <Button disabled={submitLoading} onClick={handleSubmit} style={{ position: "absolute", right: 0, bottom: 0 }}>{submitLoading ? "投稿中..." : "投稿する"}</Button>
            </div>
        }
        </>
    }

    if (error) return <div />
    return <div>
        <Typography variant="h5" style={{ marginBottom: 20 }}>他の人の回答を見る</Typography>

        {renderCards()}

        <div style={{ marginTop: 20 }} />

        {renderSubmitForm()}

    </div>
}