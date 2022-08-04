import { Card, Typography, Divider, Grid, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { StudyApi } from "../../api/StudyApi"
import { FireGaEvent } from "../../models/gtag"
import usePlan from "../../models/util-hooks/usePlan"
import useUser from "../../models/util-hooks/useUser"
import { HeroCardWidth } from "./HeroCardConst"

export default () => {
    const router = useRouter()
    const { user } = useUser()
    const { openPlanModal } = usePlan()


    return (
        <Card elevation={1} style={{ padding: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>自由英作文の練習ができるAI添削アプリ Englister</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph component="h2">
                EnglisterはAI翻訳(DeepL)を先生役にして、<br />
                <b>英作文の練習や添削がオンラインでできるサービス</b>です。<br />
                ライティング力を身につけたり、外資系企業の英語面接対策に向いています。
            </Typography>

            <div style={{
                marginTop: "40px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <Button href="/dashboard" variant="outlined" color="primary" >
                            問題を見てみる
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href="/today" disableElevation variant="contained" color="primary" >
                            無料で問題を1問解く
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}