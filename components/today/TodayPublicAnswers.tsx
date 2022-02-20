import { Button, TextField, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { useState } from "react"
import { AtomJapanse, AtomEnglish, AtomTranslation, AtomQuestionNeedRetry, AtomActiveQuestion, AtomAge } from "../../models/jotai/StudyJotai"
import useUser from "../../models/util-hooks/useUser"
import { useQueryPublciAnswersQuery, useSubmitPublicAnswerMutation } from "../../src/generated/graphql"
import PublicAnswerCard from "../publicAnswers/PublicAnswerCard"

interface Props {
    topicId: string
}

export default (props: Props) => {
    const { data, loading, error, refetch } = useQueryPublciAnswersQuery({
        variables: { topicId: Number(props.topicId) }
    })

    const { user } = useUser()


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


    if (error) return <div />
    if (!user?.attributes.sub) return <Typography variant="caption">ログインすると他の人の回答を閲覧・共有できるようになります。</Typography>
    return <div>
        <Typography variant="h5" style={{ marginBottom: 20 }}>他の人の回答を見る</Typography>
        {renderCards()}
    </div>
}