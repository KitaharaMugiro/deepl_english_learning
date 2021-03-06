import { Button, Card, Divider, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { StudyApi } from "../../api/StudyApi"
import { FireGaEvent } from "../../models/gtag"
import usePlan from "../../models/util-hooks/usePlan"
import useUser from "../../models/util-hooks/useUser"
import { HeroCardWidth } from "./HeroCardConst"
import style from "./style.module.css"

export default () => {
    const router = useRouter()
    const { openPlanModal } = usePlan()
    const { user } = useUser()
    const startFree = async () => {
        if (user) {
            router.push("/dashboard")
            return
        }

        try {
            FireGaEvent({ action: "click", category: "startFree", label: "startFree" })
            await StudyApi.studyStart("normal")
            router.push("/q/normal")
        } catch {
            openPlanModal()
        }
    }

    return (
        <Card elevation={1} style={{ padding: 20, paddingBottom: 40, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>こんな人におすすめ</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph>
                <ul className={style.ul}>
                    <li>会社や英語面接で<b>自分の意見を英語で言わないといけない</b>機会がある</li>
                    <li>いざ英語で自分の言いたいことを言おうとすると、<b>5歳児のような稚拙なことしか言えない</b></li>
                    <li>英語にしやすいからという観点のみで、<b>心にもない主張をしている瞬間がある</b></li>
                    <li>自分の言いたいことを英語にできるようになりたい</li>
                    <li>自分の英語を採点してくれる<b>先生がいない</b></li>
                    <li>日常会話ができるようになりたい</li>
                    <li>自分がよく使う例文集を作りたい</li>
                    <li><b>英語脳</b>を作りたい</li>
                    <li><b>表現のバリエーションを増やしたい</b></li>
                    <li><b>ライティング・スピーキングの練習をしたい</b></li>
                </ul>
            </Typography>

            <div style={{ height: 30 }} />
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>こんな効果があります</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph>
                <ul className={style.ul}>
                    <li><b>言いたいことが英語で言えるようになる！</b></li>
                    <li><b>「自分の思考を英語で伝える」</b>という英会話でめちゃ大事な部分が身に付く</li>
                    <li><b>こういう表現があったか〜という学び</b>が得られる</li>
                    <li><b>語彙力が効果的にアップ</b>する</li>
                    <li><b>AIが自分の英語を採点してくれる</b></li>
                    <li>添削される機会が<b>圧倒的に増える</b></li>
                    <li><b>よく使う「言い回し」</b>が外国語にとっさに変換できるようになる</li>
                </ul>
            </Typography>


            <div style={{
                marginTop: "60px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <Button href="/today" variant="contained" color="primary" size="large" disableElevation >
                            さっそくやってみる
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}