import { Container, Dialog, Grid, Link, Modal, Typography } from "@mui/material"
import { StripeApi } from "../../api/StripeApi"
import { Tier1Plan, Tier2Plan, Tier3Plan, FreePlan } from "../../models/const/PlanConst"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import PlanBox from "./PlanBox"


const plans = [Tier1Plan, Tier2Plan, Tier3Plan]
const numberOfFeatures = Math.max(FreePlan.features.length, Tier3Plan.features.length, Tier2Plan.features.length, Tier1Plan.features.length)

export default () => {
    const { user } = useUser()
    const { openSignin } = useSignin()
    const { closePlanModal, isOpenPlanModal, isPremium } = usePlan()

    const payment = async (priceId: string | undefined) => {
        if (!user) {
            openSignin()
            return
        }
        if (!priceId) return
        if (isPremium) return

        const { redirectUrl } = await StripeApi.createSession(priceId)
        window.location.href = redirectUrl
    }

    const alignPlanBox = () => {
        return plans.map(p => {
            return <Grid item xs={12} sm={4} lg={4} key={p.title}>
                <div onClick={() => payment(p.priceId)}>
                    <PlanBox
                        planName={p.title}
                        price={p.price}
                        numberOfFeatures={numberOfFeatures}
                        features={p.features} />
                </div>
            </Grid>
        })
    }

    const bye = async () => {
        const { redirectUrl } = await StripeApi.getPortalUrl()
        if (redirectUrl) {
            window.location.href = redirectUrl
        }
    }

    const renderIfPremium = () => {
        if (!isPremium) return <div />
        return <div style={{ marginTop: 20 }}>
            <Typography variant="body1" align="center">
                <Link onClick={bye} style={{ cursor: "pointer" }}>
                    退会する
                </Link>
            </Typography>

            <Typography variant="body1" align="center">
                ※プランを変更する場合は必ず１度退会してからプランを変更してください。
            </Typography>
        </div>
    }

    return <Dialog
        open={isOpenPlanModal}
        onClose={closePlanModal}
        closeAfterTransition
        fullWidth
        maxWidth="lg"
    >
        <div style={{ padding: 30 }}>

            <Typography
                variant="h3"
                align="center" color="textPrimary"
                style={{ marginTop: 40 }}
                gutterBottom>
                <b>プラン</b>
            </Typography>
            <Typography
                align="center" color="textSecondary"
                gutterBottom>
                圧倒的に継続しやすい価格。いつでも解約可能。
            </Typography>
            <Grid container spacing={3}>
                {alignPlanBox()}
            </Grid>

            {renderIfPremium()}
        </div>

    </Dialog>

}