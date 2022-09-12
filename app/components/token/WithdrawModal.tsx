import { Modal, Box, Typography } from "@mui/material"

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

export default (props: Props) => {
    const handleOpen = () => props.setOpen(true);
    const handleClose = () => props.setOpen(false);
    return <>
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    </>
}