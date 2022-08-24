import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Backdrop, Card, CardHeader, CircularProgress, Grid, IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material"
import { convertFromRaw, Editor, EditorState } from 'draft-js'
import { useState } from "react"
import { LocalStorageHelper } from '../../models/localstorage/LocalStorageHelper'
import { Question } from '../../models/type/Question'
import useUser from "../../models/util-hooks/useUser"
import diary from '../../pages/diary'
import { useDeleteMyNoteMutation, useListMyDiaryQuery, useListMyNoteQuery } from "../../src/generated/graphql"

export default () => {
    // const { data, error, loading, refetch } = useListMyNoteQuery()
    const { user } = useUser()

    const { data, error, loading, refetch } = useListMyDiaryQuery({
        variables: { userId: user?.attributes.sub! }
    })

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

    const onCloseModal = () => {
        setEditModeId(undefined)
        refetch()
    }


    const renderNotes = () => {
        return data?.englister_Diary.map(diary => {
            // const memo = myNote.memo ? JSON.parse(myNote.memo) : undefined
            // const contentState = convertFromRaw(memo);
            // const editorState = EditorState.createWithContent(contentState);
            // const question: Question = {
            //     topicId: myNote.topicId,
            //     title: myNote.questionTitle,
            //     description: myNote.questionDescription,
            //     titleEng: myNote.questionTitle,
            //     descriptionEng: myNote.questionDescription,
            //     categorySlug: myNote.categorySlug || ""
            // }
            return <div style={{ marginTop: 20 }}>

                <Card style={{ padding: 10 }}>
                    <CardHeader
                        title={<Typography variant="h6" style={{ fontWeight: 700 }} >
                            {diary.userInputText}
                        </Typography>}
                        subheader={
                            <p style={{ color: "#677284", marginTop: 0 }}>
                                {diary.userInputText}
                            </p>
                        }

                    />
                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px", fontSize: "0.7rem" }}>
                        {diary.userInputText}
                    </Paper>
                    <div style={{ height: 5 }} />
                    <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", fontSize: "1rem" }}>
                        {diary.userInputText}
                    </Paper>
                    <div style={{ height: 15 }} />

                    {/* <Editor
                        editorState={editorState}
                        onChange={() => { }}
                        readOnly={true}
                    /> */}
                </Card>
            </div>
        })
    }

    if (!user) {
        return <div>
            <Typography variant="caption">ログインすると学習メモを登録できるようになります</Typography>
        </div>
    }

    if (loading) {
        return <Backdrop open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    }

    if (data?.englister_Diary.length === 0) {
        //TODO: 登録方法について説明する
        return <div>
            <Typography variant="caption">まだ登録していません</Typography>
        </div>
    }
    return <div>
        {renderNotes()}

    </div>

}