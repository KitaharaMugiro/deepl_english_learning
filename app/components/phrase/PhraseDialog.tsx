import { Dialog, DialogContent, DialogTitle, Paper, PaperProps } from "@mui/material"
import PhraseList from "./PhraseList"
import _Draggable from 'react-draggable';
import usePhrase from "../../models/util-hooks/usePhrase";

function PaperComponent(props: PaperProps) {
    const Draggable: any = _Draggable
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default () => {
    const { open, closePhraseList } = usePhrase()
    return <Dialog
        open={open}
        scroll="paper"
        PaperComponent={PaperComponent}
        onClose={closePhraseList}
        aria-labelledby="draggable-dialog-title"
    >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">フレーズリスト</DialogTitle>
        <DialogContent dividers={true}>
            <PhraseList />
        </DialogContent>
    </Dialog >

}