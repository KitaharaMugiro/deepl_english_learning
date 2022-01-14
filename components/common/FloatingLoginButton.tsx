import { Fab, Typography } from "@mui/material"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"

export default () => {
    const { user, loadingUser } = useUser()
    const { openSignin } = useSignin()
    if (loadingUser) return <div />
    if (user) return <div />
    return (
        <Fab
            variant="extended"
            color="primary"
            onClick={openSignin}
            style={{ position: "fixed", right: 30, bottom: 30 }}>
            <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
                本登録受付中！
            </Typography>
        </Fab>
    )
}