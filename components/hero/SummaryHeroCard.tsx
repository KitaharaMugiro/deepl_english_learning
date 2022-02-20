import { Card, Typography, Divider, Grid, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { StudyApi } from "../../api/StudyApi"
import { FireGaEvent } from "../../models/gtag"
import { HeroCardWidth } from "./HeroCardConst"

export default () => {
    const router = useRouter()
    const startFree = async () => {
        FireGaEvent({ action: "click", category: "startFree", label: "startFree" })
        await StudyApi.studyStart("free")
        router.push("/q/free")
    }

    return (
        <Card elevation={1} style={{ padding: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>英語で意見を言えるようになる<br />
                    AI英作文添削アプリ</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph>
                <b>AIが人類に英語を教える日が来た！</b><br />
                Englisterは人気翻訳サービスのDeepLを先生役にして、<br />
                <b>自分が伝えたいことを英語にする訓練ができるサービス</b>です。<br />
            </Typography>

            <div style={{
                marginTop: "40px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <Button onClick={startFree} variant="outlined" color="primary" >
                            さっそくやってみる
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button href="/today" disableElevation variant="contained" color="primary" >
                            英語年齢診断テスト
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}