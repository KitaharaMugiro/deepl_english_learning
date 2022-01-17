import { Backdrop, CircularProgress } from "@mui/material"
import { useAtom } from "jotai"
import React from "react"
import { BackdropAtom, BackdropMessageAtom } from "../../models/jotai/Backdrop"

export default () => {
    const [open] = useAtom(BackdropAtom)
    const [message] = useAtom(BackdropMessageAtom)
    return <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
            <br />
            <br />
            {message}
        </Backdrop>
    </>
}