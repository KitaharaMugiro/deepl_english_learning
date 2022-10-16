import { Button, Card, Divider, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import { HeroCardWidth } from "./HeroCardConst"

export default () => {
    const router = useRouter()
    const { user } = useUser()
    const { openPlanModal } = usePlan()
    const { openSignin } = useSignin()

    const onStart = () => {
        if (user) {
            router.push("/dashboard")
        } else {
            openSignin()
        }
    }

    return (
        <Card elevation={1} style={{ padding: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>日本人が自信を持って世界で活躍するための英語学習法</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph component="h2">
                自分の考えや意見を英語で伝えることに不安を感じていませんか？<br />
                EnglisterはAI翻訳(DeepL)を先生役にして、<br />
                <b>英作文の練習や添削がオンラインでできるサービス</b>です。<br />
                ライティング力を身につけたり、外資系企業の英語面接対策に向いています。
            </Typography>

            <div style={{
                marginTop: "40px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <Button onClick={onStart} variant="outlined" color="primary" >
                            今すぐ始める
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href="/today" disableElevation variant="contained" color="primary" >
                            試しに1問解く
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}