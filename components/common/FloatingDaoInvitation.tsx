import { Fab, Typography } from "@mui/material"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"

export default () => {
    const { user, loadingUser } = useUser()
    if (loadingUser) return <div />
    if (user) return <div />
    return (
        <Fab
            variant="extended"
            color="primary"
            href="https://button-hearing-b81.notion.site/Englister-DAO-6626d4cc036c42a08a6bbeb58edb4cf1"
            style={{ position: "fixed", right: 30, bottom: 30 }}>
            <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
                Join DAO!
            </Typography>
        </Fab>
    )
}