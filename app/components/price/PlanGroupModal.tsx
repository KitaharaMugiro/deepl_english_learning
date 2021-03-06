import { Container, Dialog, FormControlLabel, Grid, Link, Modal, Switch, Typography } from "@mui/material"
import { useState } from "react"
import { StripeApi } from "../../api/StripeApi"
import { Tier1Plan, Tier2Plan, Tier3Plan, YearlyTier1Plan, YearlyTier2Plan, YearlyTier3Plan } from "../../models/const/PlanConst"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import PlanBox from "./PlanBox"
import style from "./style.module.css"


export default () => {
    const [yearly, setYearly] = useState(false)
    const plans = yearly ? [YearlyTier1Plan, YearlyTier2Plan, YearlyTier3Plan] : [Tier1Plan, Tier2Plan, Tier3Plan]
    const numberOfFeatures = Math.max(...plans.map(plan => plan.features.length))

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
                        features={p.features}
                        yearly={yearly} />
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
                    ????????????
                </Link>
            </Typography>

            <Typography variant="body1" align="center">
                ??? ??????????????????????????????????????????????????????????????????????????????????????????????????????
            </Typography>
        </div>
    }

    const renderIfNotPremium = () => {
        if (isPremium) return <div />
        return <div style={{ marginTop: 20 }}>
            <Typography variant="h5" align="center">
                <Link href="/today" style={{ cursor: "pointer" }}>
                    ???????????????????????????????????????
                </Link>
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
                className={style.grandientText}
                style={{
                    marginTop: 40,
                }}
                gutterBottom>
                <b>????????????????????????</b>
            </Typography>
            <Typography
                align="center" color="textSecondary"
                gutterBottom>
                ??????????????????????????????????????????????????????????????????
            </Typography>

            <FormControlLabel
                checked={yearly}
                onChange={() => setYearly(!yearly)}
                control={
                    <Switch
                    />
                } label={<b
                    onClick={() => setYearly(!yearly)}>????????????????????????(2???????????????!)</b>} />

            <Grid container columnSpacing={3}>
                {alignPlanBox()}
            </Grid>

            {renderIfPremium()}

            {renderIfNotPremium()}
        </div>

    </Dialog >

}