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
                variant="h4"
                align="center" color="textPrimary"
                style={{ marginTop: 40 }}
                gutterBottom>
                学習記録や他の様々な機能を使いませんか？
            </Typography>
            <Typography
                align="center" color="textSecondary"
                gutterBottom>
                このまま会員登録をしなくてもOKです！しかし会員登録は5秒で完了できます！
            </Typography>
            <SigninFrame />
        </div>

    </Dialog>

}