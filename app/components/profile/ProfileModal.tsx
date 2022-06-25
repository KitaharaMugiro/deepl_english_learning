import { Modal, Box, Button, Typography, Paper } from "@mui/material"
import { useState } from "react"
import NameInput from "./NameInput"

export default () => {
    const [open, setOpen] = useState(true)
    const onClose = () => {
        setOpen(false)
    }

    return <Modal
        open={open}
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
            <NameInput />

        </Box>
    </Modal>
}