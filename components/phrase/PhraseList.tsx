import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Card, CircularProgress, Divider, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useState } from "react"
import useEventSubmit from "../../models/util-hooks/useEventSubmit"
import useUser from "../../models/util-hooks/useUser"
import { useDeletePhraseMutation, useListPhraseQueryQuery, useListPhraseSubscription, useSavePhraseMutation, useUpdatePhraseMutation } from "../../src/generated/graphql"

export default () => {

    //エラーが出る
    //const { data, error, loading } = useListPhraseSubscription()

    const { data, error, loading, refetch } = useListPhraseQueryQuery()
    const { user } = useUser()
    const [deletePhraseMutation] = useDeletePhraseMutation()
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [editModeId, setEditModeId] = useState<number | undefined>(undefined)


    const [savePhraseMutation] = useSavePhraseMutation()
    const [updatePhraseMutation] = useUpdatePhraseMutation()
    const [saveLoading, setSaveLoading] = useState(false)

    const [phrase, setPhrase] = useState("")
    const [description, setDescription] = useState("")
    const [editingPhrase, setEditingPhrase] = useState("")
    const [editingDescription, setEditingDescription] = useState("")
    const { submitPhrase } = useEventSubmit()

    const startEdit = async (phraseId: number, _phrase: string, _description: string) => {
        setEditModeId(phraseId)
        setEditingDescription(_description)
        setEditingPhrase(_phrase)
    }

    const endEdit = async (phraseId: number) => {
        setEditModeId(undefined)
        setSaveLoading(true)
        await updatePhraseMutation({
            variables: {
                id: phraseId,
                phrase: editingPhrase,
                description: editingDescription
            }
        })
        await refetch()
        setSaveLoading(false)
    }

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
                        placeholder="例) In other words"
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField
                        placeholder="例) 言い換えると〜"
                        value={phrase}
                        fullWidth
                        onChange={(e) => setPhrase(e.target.value)} />
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
                        <Grid item xs={12} md={12} lg={12}>
                            <Card style={{ padding: 20, display: "flex" }}>
                                {
                                    editModeId === phrase.id ? <div style={{ flexGrow: 2 }}>
                                        <TextField fullWidth value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)} />
                                        <TextField fullWidth value={editingPhrase} onChange={(e) => setEditingPhrase(e.target.value)} />
                                    </div> : <div style={{ flexGrow: 2 }}>
                                        <Typography variant="h5">{phrase.description}</Typography>
                                        <Typography variant="body2" color="text.secondary">{phrase.phrase}</Typography>
                                    </div>
                                }


                                <div>
                                    {editModeId === phrase.id ?
                                        <IconButton disabled={saveLoading} onClick={() => endEdit(phrase.id)} color="primary"><CheckIcon /></IconButton>
                                        : <IconButton disabled={saveLoading} onClick={() => startEdit(phrase.id, phrase.phrase, phrase.description)}><EditIcon /></IconButton>}
                                    <IconButton disabled={deleteLoading} onClick={() => deletePhrase(phrase.id)}><DeleteIcon /></IconButton>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>

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