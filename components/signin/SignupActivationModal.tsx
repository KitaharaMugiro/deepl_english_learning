import { Container, Dialog, Grid, Link, Modal, Typography } from "@mui/material"
import { StripeApi } from "../../api/StripeApi"
import { Tier1Plan, Tier2Plan, Tier3Plan, FreePlan } from "../../models/const/PlanConst"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useSignupActivation from "../../models/util-hooks/useSignupActivation"
import useUser from "../../models/util-hooks/useUser"
import SigninFrame from "./SigninFrame"



const plans = [Tier1Plan, Tier2Plan, Tier3Plan]
const numberOfFeatures = Math.max(FreePlan.features.length, Tier3Plan.features.length, Tier2Plan.features.length, Tier1Plan.features.length)

export default () => {
    const { user } = useUser()
    const { openSignin } = useSignin()

    const { isOpenSignupActicationModal, closeSignupActivationModal } = useSignupActivation()

    return <Dialog
        open={isOpenSignupActicationModal}
        onClose={closeSignupActivationModal}
        closeAfterTransition
        fullWidth
        maxWidth="sm"
    >
        <div style={{ padding: 30 }}>

            <Typography
                variant="h3"
                align="center" color="textPrimary"
                style={{ marginTop: 40 }}
                gutterBottom>
                気に入りましたか？
            </Typography>
            <Typography
                align="center" color="textSecondary"
                gutterBottom>
                ５秒で終わる会員登録をして本格的に勉強しましょう！
            </Typography>
            <SigninFrame />
        </div>

    </Dialog>

}