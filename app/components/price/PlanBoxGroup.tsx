import { Container, FormControlLabel, Grid, Switch, Typography } from "@mui/material"
import { useState } from "react"
import { StripeApi } from "../../api/StripeApi"
import { Tier1Plan, Tier2Plan, Tier3Plan, YearlyTier1Plan, YearlyTier2Plan, YearlyTier3Plan } from "../../models/const/PlanConst"
import { FireGaEvent } from "../../models/gtag"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import PlanBox from "./PlanBox"
import style from "./style.module.css"



export default () => {
    const [yearly, setYearly] = useState(false)

    const plans = yearly ? [YearlyTier1Plan, YearlyTier2Plan, YearlyTier3Plan,] : [Tier1Plan, Tier2Plan, Tier3Plan]
    const numberOfFeatures = Math.max(...plans.map(plan => plan.features.length))

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
            return <Grid item xs={12} sm={4} lg={4} key={p.title}>
                <div onClick={() => payment(p.priceId)}>
                    <PlanBox
                        planName={p.title}
                        price={p.price}
                        numberOfFeatures={numberOfFeatures}
                        features={p.features}
                        yearly={yearly} />
                </div>
            </Grid>
        })
    }

    return <Container style={{ paddingLeft: 32, paddingRight: 32 }}>
        <Typography
            variant="h3"
            align="center" color="textPrimary"
            className={style.grandientText}
            style={{
                marginTop: 40,
            }}
            gutterBottom>
            <b>プレミアムプラン</b>
        </Typography>
        <Typography
            align="center" color="textSecondary"
            gutterBottom>
            圧倒的に継続しやすい価格。いつでも解約可能。
        </Typography>

        <FormControlLabel
            checked={yearly}
            onChange={() => setYearly(!yearly)}
            control={
                <Switch
                />
            } label={<b>お得な年間プラン(2ヶ月分無料!)</b>} />

        <Grid container columnSpacing={3}>
            {alignPlanBox()}
        </Grid>

    </Container>

}