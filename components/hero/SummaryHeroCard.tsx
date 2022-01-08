import { Card, Typography, Divider, Grid, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import startStudy from "../../models/process/startStudy"
import { HeroCardWidth } from "./HeroCardConst"

export default () => {
    const router = useRouter()
    const startFree = async () => {
        await startStudy("free")
        router.push("/q/free")
    }

    return (
        <Card elevation={1} style={{ padding: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>英語で意見を言えるようになる<br />
                    AI添削アプリ</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph>
                <b>人類がAIに教えた自然言語を、AIが人類に教える日が来た！</b><br />
                <b>Englister</b>は人気翻訳サービスのDeepLを先生役にして、<br />
                自分が伝えたいことを英語にする訓練をするサービスです。<br />
                単純な３ステップ。<br />
                <b>日本語で自分の意見を書く → 英語にする → お手本を覚える。</b><br />
                <b>10問</b>程度やると英語力の向上を実感できるはずです。<br />
                とりあえずやってみよう。
            </Typography>

            <div style={{
                marginTop: "40px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>

                        <Button onClick={startFree} variant="contained" color="primary" >
                            さっそくやってみる
                        </Button>

                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}