import { Button, Card, Divider, Grid, TextField } from "@mui/material"
import { useState } from "react"
import useEventSubmit from "../../models/util-hooks/useEventSubmit"
import { useDeletePhraseMutation, useListPhraseQueryQuery, useListPhraseSubscription, useSavePhraseMutation } from "../../src/generated/graphql"

export default () => {

    //const { data, error, loading } = useListPhraseSubscription()
    const { data, error, loading, refetch } = useListPhraseQueryQuery()
    const [deletePhraseMutation] = useDeletePhraseMutation()

    const [savePhraseMutation] = useSavePhraseMutation()

    const [phrase, setPhrase] = useState("")
    const [description, setDescription] = useState("")
    const { submitPhrase } = useEventSubmit()

    const onSave = async () => {
        await savePhraseMutation({
            variables: {
                phrase,
                description
            }
        })
        await refetch()
        setPhrase("")
        setDescription("")
        submitPhrase()
    }

    const deletePhrase = async (id: number) => {
        if (window.confirm("削除してもよろしいですか？")) {
            await deletePhraseMutation({
                variables: {
                    id
                }
            })
            await refetch()
        }
    }

    const renderRegisterForm = () => {
        return (
            <div style={{ display: "flex", }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            placeholder="例) 言い換えると〜"
                            value={phrase}
                            fullWidth
                            onChange={(e) => setPhrase(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            placeholder="例) In other words"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </Grid>
                </Grid>

                <Button onClick={onSave}>Save</Button>
            </div>
        )
    }

    const renderCards = () => {
        return data?.englister_Phrase.map(phrase => {
            return <div style={{ marginTop: 5 }}>
                <Divider />
                <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Card style={{ padding: 20 }}>
                                {phrase.phrase}
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Card style={{ padding: 20 }}>
                                {phrase.description}
                            </Card>
                        </Grid>
                    </Grid>
                    <Button onClick={() => deletePhrase(phrase.id)}>Delete</Button>
                </div>
            </div>
        })
    }

    return <div>
        {renderRegisterForm()}
        {renderCards()}
    </div>

}