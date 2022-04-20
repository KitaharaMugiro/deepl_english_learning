import { Modal, Box, Typography, Button, Icon, Paper } from "@mui/material"
import { Question } from "../../models/type/Question"
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
interface Props {
    open: boolean
    onClose: () => void
    question: Question
    english: string
    japanese: string
    translation: string
}


export default (props: Props) => {


    return <Modal
        open={props.open}
        onClose={props.onClose}
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
                <Button size="small" color="info" startIcon={<OpenInFullIcon />}>
                    一覧を開く
                </Button>

                <Button variant="contained">
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
                <div
                    placeholder="ここにメモを残す"
                    data-content-editable-leaf="true"
                    contentEditable={true}
                    style={{
                        maxWidth: "100%",
                        width: "100%",
                        minHeight: 400,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        caretColor: "rgb(55, 53, 47)",
                        padding: "3px 2px",
                        color: "rgb(55, 53, 47)",
                    }}
                />

            </div>

        </Box>
    </Modal>
}