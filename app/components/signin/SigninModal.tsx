import { Modal, Backdrop, Fade, Box, Typography, Card } from "@mui/material"
import useSignin from "../../models/util-hooks/useSignin"
import SigninFrame from "./SigninFrame"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#F2F2F2',
    boxShadow: 24,
    width: "95%",
    maxWidth: 600,
};

export default () => {
    const { isOpen, closeSignin } = useSignin()

    return <Modal
        open={isOpen}
        onClose={closeSignin}
        closeAfterTransition
    >
        <Box sx={style}>
            <SigninFrame />
        </Box>
    </Modal>
}