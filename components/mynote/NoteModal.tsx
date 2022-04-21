import { Modal, Box, Typography, Button, Icon, Paper } from "@mui/material"
import { Question } from "../../models/type/Question"
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useRef, useState } from "react";
import RichEditor from "./RichEditor";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useSaveMyNoteMutation, useUpdateMyNoteMutation } from "../../src/generated/graphql";

interface Props {
    open: boolean
    onClose: () => void
    question: Question
    english: string
    japanese: string
    translation: string
    memo?: string
    myNoteId?: number
}


export default (props: Props) => {
    const [saveLoading, setSaveLoading] = useState(false)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [saveMyNote] = useSaveMyNoteMutation()
    const [updateMyNote] = useUpdateMyNoteMutation()
    const [isNewlyCreated, setIsNewlyCreated] = useState(true)
    const [savedMyNoteId, setSavedMyNoteId] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (props.memo) {
            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.memo))))
            setIsNewlyCreated(false)
        }
    }, [props.memo])

    const onClose = async () => {
        if (!editorState.isEmpty()) {
            if (window.confirm("編集キャンセルしてもよろしいですか？")) {
                props.onClose()
            }
        }

    }

    const save = async () => {
        setSaveLoading(true)
        const contentState = editorState.getCurrentContent();
        const rawText = convertToRaw(contentState)
        const memo = JSON.stringify(rawText)
        if (isNewlyCreated) {
            const data = await saveMyNote({
                variables: {
                    topicId: props.question.topicId,
                    english: props.english,
                    japanese: props.japanese,
                    translation: props.translation,
                    memo,
                    questionTitle: props.question.title,
                    questionDescription: props.question.description,
                    categorySlug: props.question.categorySlug || "",
                }
            })
            setSavedMyNoteId(data?.data?.insert_englister_MyNote_one?.id)
        } else {
            const myNoteId = props.myNoteId || savedMyNoteId
            if (myNoteId) {
                await updateMyNote({ variables: { id: myNoteId, memo } })
            } else {
                throw Error("myNoteId is not defined")
            }
        }

        setSaveLoading(false)
        props.onClose()
    }

    return <Modal
        open={props.open}
        onClose={onClose}
    >
        <Box style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "95%",
            height: "80%",
            maxWidth: "600px",
            padding: 5,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
        }}>
            {/* メニュ */}
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 5 }}>
                <Button size="small" color="info" startIcon={<OpenInFullIcon />} href="/mynote">
                    一覧を開く
                </Button>

                <Button variant="contained" onClick={save} disabled={saveLoading}>
                    保存する
                </Button>
            </div>

            <div style={{ overflowY: "scroll", padding: 30 }}>
                <Typography variant="h6" style={{ fontWeight: 700 }} >
                    {props.question.title}
                </Typography>

                <p style={{ color: "#677284", marginTop: 0 }}>
                    {props.question.description}
                </p>

                <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px", fontSize: "0.7rem" }}>
                    {props.japanese}
                </Paper>
                <div style={{ height: 5 }} />
                <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", fontSize: "1rem" }}>
                    {props.translation}
                </Paper>
                <div style={{ height: 5 }} />

                <RichEditor editorState={editorState} setEditorState={setEditorState} />
            </div>

        </Box>
    </Modal>
}