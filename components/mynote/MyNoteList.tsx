import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Card, CircularProgress, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import { convertFromRaw, EditorState, Editor } from 'draft-js'
import { useState } from "react"
import useEventSubmit from "../../models/util-hooks/useEventSubmit"
import useUser from "../../models/util-hooks/useUser"
import { useDeleteMyNoteMutation, useDeletePhraseMutation, useListMyNoteQuery, useListPhraseQueryQuery, useListPhraseSubscription, useSavePhraseMutation, useUpdatePhraseMutation } from "../../src/generated/graphql"

export default () => {

    const { data, error, loading, refetch } = useListMyNoteQuery()
    const { user } = useUser()
    const [deleteMyNoteMutation] = useDeleteMyNoteMutation()
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [editModeId, setEditModeId] = useState<number | undefined>(undefined)


    const startEdit = async (myNoteId: number) => {
        setEditModeId(myNoteId)
    }



    const deleteMyNote = async (id: number) => {
        if (window.confirm("削除してもよろしいですか？")) {
            setDeleteLoading(true)
            await deleteMyNoteMutation({
                variables: {
                    id
                }
            })
            await refetch()
            setDeleteLoading(false)
        }
    }


    const renderNotes = () => {
        return data?.englister_MyNote.map(myNote => {
            const memo = myNote.memo ? JSON.parse(myNote.memo) : undefined
            const contentState = convertFromRaw(memo);
            const editorState = EditorState.createWithContent(contentState);
            return <div style={{ marginTop: 5 }}>
                <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Card style={{ padding: 10 }}>
                                <Typography variant="h6" style={{ fontWeight: 700 }} >
                                    {myNote.questionTitle}
                                </Typography>

                                <p style={{ color: "#677284", marginTop: 0 }}>
                                    {myNote.questionDescription}
                                </p>

                                <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px", fontSize: "0.7rem" }}>
                                    {myNote.japanese}
                                </Paper>
                                <div style={{ height: 5 }} />
                                <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", fontSize: "1rem" }}>
                                    {myNote.translation}
                                </Paper>
                                <div style={{ height: 15 }} />

                                <Editor
                                    editorState={editorState}
                                    onChange={() => { }}
                                    readOnly={true}
                                />
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
        {renderNotes()}
    </div>

}