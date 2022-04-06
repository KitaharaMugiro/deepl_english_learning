import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material"
import Confetti from "react-confetti"

interface Props {
    open: boolean
    level: number
    onClose: () => void
    width: number
    height: number
}

export default (props: Props) => {

    return <>
        <Dialog
            open={props.open}
            onClose={props.onClose}
            closeAfterTransition
            fullWidth
            maxWidth="md"
        >
            {/* <DialogTitle style={{ textAlign: "center" }}>レベルアップ！</DialogTitle> */}
            <DialogContent dividers={true}>
                <Typography
                    textAlign="center"
                    variant="h2"
                    sx={{ fontWeight: 'bold' }}
                    color="primary">🎉 Lv. {props.level} 🎉</Typography>

                <div style={{ height: 10 }} />
                <Typography
                    textAlign="center"
                    variant="body1"
                    sx={{ fontWeight: 'bold' }}>LEVEL UP!!</Typography>

                <div style={{ height: 100 }} />
                <Button
                    onClick={props.onClose}
                    fullWidth variant="contained" disableElevation>CONTINUE</Button>
            </DialogContent>
        </Dialog >
        <Confetti
            width={props.width}
            height={props.height}
            run={props.open}
            recycle={true}
            style={{ display: props.open ? "block" : "none" }}
            numberOfPieces={100}
        />
    </>
}