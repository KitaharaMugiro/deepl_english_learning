import { Dialog, DialogTitle, DialogContent, DialogContentText, FormControlLabel, Checkbox, DialogActions, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { LocalStorageHelper } from "../localstorage/LocalStorageHelper"

export default (key: string, callback: Function) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [open, setOpen] = useState(false)
    const [save, setSave] = useState(true)
    const [param, setParam] = useState<any>()

    useEffect(() => {
        const confirmed = LocalStorageHelper.getConfirmed(key)
        if (confirmed) {
            setIsConfirmed(true)
        }
    }, [])

    const setCallbackParameter = (param: any) => {
        setParam(param)
    }

    const openDialog = (param: any) => {
        if (!isConfirmed) {
            setOpen(true)
        } else {
            callback(param)
        }
    }

    const onClickConfirm = () => {
        setIsConfirmed(true)
        if (save) {
            LocalStorageHelper.setConfirmed(key)
        }
        setOpen(false)
        callback(param)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event: any) => {
        setSave(event.target.checked);
    };

    const dialog = <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <div style={{ padding: 10 }}>
            <DialogTitle id="alert-dialog-title" style={{ minWidth: '400px' }}>
                この操作はハートを消費します
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    ハートを消費しますがよろしいですか？
                </DialogContentText>
                <FormControlLabel checked={save} onChange={handleChange} control={<Checkbox />} label="次回以降は表示しない" />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onClickConfirm} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </div>
    </Dialog>

    return { dialog, openDialog, setCallbackParameter }
}