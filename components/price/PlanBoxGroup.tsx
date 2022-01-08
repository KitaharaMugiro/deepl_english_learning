import { Container, Grid, Typography } from "@mui/material"
import { StripeApi } from "../../api/StripeApi"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import PlanBox from "./PlanBox"

const FreePlan = {
    title: "Freeプラン",
    price: 0,
    features: ["Trial問題解き放題", "登録不要", "Englisterを試したい人",],
    priceId: undefined
}
const Tier3Plan = {
    title: "継続プラン",
    price: 330,
    features: ["3問/日まで", "目安15分(1問約5分)", "コツコツ継続したい人"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP2gFZt1qcfPgxhqpUz2az" : "price_1KFP5kFZt1qcfPgxKao0ExVC"
}
const Tier2Plan = {
    title: "がっつりプラン",
    price: 1100,
    features: ["10問/日まで", "目安1時間(1問約5分)", "復習しっかりしたい人", "本気の人向け"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP2FFZt1qcfPgxjw7MlkW1" : "price_1KFP5oFZt1qcfPgxnkm5UlvI"
}
const Tier1Plan = {
    title: "Unlimitedプラン",
    price: 2200,
    features: ["問題解き放題", "復習し放題", "制限が嫌いな人", "もっとEnglister開発して欲しい人"],
    priceId: process.env.NODE_ENV === "development" ? "price_1KFP15FZt1qcfPgxHlnLFBKo" : "price_1KFP5sFZt1qcfPgx9DimiUnU"
}
const plans = [Tier1Plan, Tier2Plan, Tier3Plan, FreePlan,]
const numberOfFeatures = Math.max(FreePlan.features.length, Tier3Plan.features.length, Tier2Plan.features.length, Tier1Plan.features.length)

export default () => {
    const { user } = useUser()
    const { openSignin } = useSignin()
    const payment = async (priceId: string | undefined) => {
        if (!priceId) return
        if (!user) {
            openSignin()
            return
        }
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
            プラン
        </Typography>
        <Typography
            align="center" color="textSecondary"
            gutterBottom>
            圧倒的に継続しやすい価格
        </Typography>
        <Grid container spacing={3}>
            {alignPlanBox()}
        </Grid>
    </Container>

}