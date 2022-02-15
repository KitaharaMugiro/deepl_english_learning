import { Button, Card, CircularProgress, Divider, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useState } from "react"
import useEventSubmit from "../../models/util-hooks/useEventSubmit"
import useUser from "../../models/util-hooks/useUser"
import { useDeletePhraseMutation, useListPhraseQueryQuery, useListPhraseSubscription, useSavePhraseMutation } from "../../src/generated/graphql"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default () => {

    //const { data, error, loading } = useListPhraseSubscription()
    const { data, error, loading, refetch } = useListPhraseQueryQuery()
    const { user } = useUser()
    const [deletePhraseMutation] = useDeletePhraseMutation()
    const [deleteLoading, setDeleteLoading] = useState(false)


    const [savePhraseMutation] = useSavePhraseMutation()
    const [saveLoading, setSaveLoading] = useState(false)

    const [phrase, setPhrase] = useState("")
    const [description, setDescription] = useState("")
    const { submitPhrase } = useEventSubmit()

    const onSave = async () => {
        setSaveLoading(true)
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
        setSaveLoading(false)
    }

    const deletePhrase = async (id: number) => {
        if (window.confirm("削除してもよろしいですか？")) {
            setDeleteLoading(true)
            await deletePhraseMutation({
                variables: {
                    id
                }
            })
            await refetch()
            setDeleteLoading(false)
        }
    }

    const renderRegisterForm = () => (
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

            {saveLoading ? <CircularProgress thickness={2} />
                : <IconButton disabled={saveLoading} onClick={onSave}><AddIcon /></IconButton>}
        </div>
    )

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
                    <IconButton disabled={deleteLoading} onClick={() => deletePhrase(phrase.id)}><DeleteIcon /></IconButton>
                </div>
            </div>
        })
    }

    if (!user) {
        return <div>
            <Typography variant="caption">ログインすると覚えたいフレーズを登録できるようになります</Typography>
        </div>
    }

    return <div>
        {renderRegisterForm()}
        {renderCards()}
    </div>

}