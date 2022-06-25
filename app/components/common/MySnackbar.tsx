import { Alert, Snackbar } from "@mui/material";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { SnackbarAtom, SnackbarMessageAtom, SnackbarColorAtom, SnackbarLinkAtom, CenterSnackbarAtom } from "../../models/jotai/Backdrop";

export default () => {
    const router = useRouter()
    const [open, setOpen] = useAtom(SnackbarAtom)
    const [centerOpen, setCenterOpen] = useAtom(CenterSnackbarAtom)
    const [message] = useAtom(SnackbarMessageAtom)
    const [color] = useAtom(SnackbarColorAtom)
    const [link] = useAtom(SnackbarLinkAtom)

    const handleClose = (
        event: any,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setCenterOpen(false);
    };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClick={link ? () => { router.push(link) } : () => { }}
                    onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {message}
                </Alert>

            </Snackbar>

            <Snackbar
                open={centerOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {message}
                </Alert>

            </Snackbar>
        </div>
    );
}