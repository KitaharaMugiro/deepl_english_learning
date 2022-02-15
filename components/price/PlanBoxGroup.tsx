import { Container, Grid, Typography } from "@mui/material"
import { StripeApi } from "../../api/StripeApi"
import { Tier1Plan, Tier2Plan, Tier3Plan, FreePlan } from "../../models/const/PlanConst"
import { FireGaEvent } from "../../models/gtag"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import PlanBox from "./PlanBox"

const plans = [Tier1Plan, Tier2Plan, Tier3Plan, FreePlan,]
const numberOfFeatures = Math.max(FreePlan.features.length, Tier3Plan.features.length, Tier2Plan.features.length, Tier1Plan.features.length)

export default () => {
    const { user } = useUser()
    const { isPremium } = usePlan()
    const { openSignin } = useSignin()
    const payment = async (priceId: string | undefined) => {
        if (!user) {
            openSignin()
            return
        }
        if (isPremium) return
        if (!priceId) return

        FireGaEvent({ action: "click", category: "payment", label: `priceId=${priceId}` })
        const { redirectUrl } = await StripeApi.createSession(priceId)
        window.location.href = redirectUrl
    }

    const alignPlanBox = () => {
        return plans.map(p => {
            return <Grid item xs={12} sm={6} lg={3} key={p.title}>
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

    return <Container style={{ paddingLeft: 32, paddingRight: 32 }}>
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
    </Container>

}