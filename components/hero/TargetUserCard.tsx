import { Card, Typography, Divider, Grid, Button } from "@mui/material"
import Link from "next/link"
import { HeroCardWidth } from "./HeroCardConst"
import style from "./style.module.css"

export default () => {
    return (
        <Card elevation={1} style={{ padding: 20, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                <b>こんな人におすすめ</b>
            </Typography>
            <Divider style={{ margin: 20 }} />
            <Typography align="center" color="textSecondary" paragraph>
                <ul className={style.ul}>
                    <li>いざ英語で自分の言いたいことを言おうとすると、5歳児のような稚拙なことしか言えない</li>
                    <li>英語にしやすいからという観点のみで、心にもない主張をしている瞬間がある</li>
                    <li>自分の言いたいことを英語にできるようになりたい</li>
                    <li>自分の英語を採点してくれる先生がいない</li>
                    <li>日常会話ができるようになりたい</li>
                    <li>自分がよく使う例文集を作りたい</li>
                    <li>英語脳を作りたい</li>
                    <li>表現のバリエーションを増やしたい</li>
                    <li>ライティング・スピーキングの練習をしたい</li>
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
                    <li>言いたいことが英語で言えるようになる！</li>
                    <li>「自分の思考を英語で伝える」という英会話でめちゃ大事な部分が身に付く</li>
                    <li>こういう表現があったか〜という学びが得られる</li>
                    <li>語彙力が効果的にアップする</li>
                    <li>AIが自分の英語を採点してくれる</li>
                    <li>添削される機会が圧倒的に増える</li>
                    <li>よく遣う「言い回し」が外国語にとっさに変換できるようになる</li>
                </ul>
            </Typography>


            <div style={{
                marginTop: "40px",
            }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <Link href="/question/1_question">
                            <Button variant="contained" color="primary">
                                さっそくやってみる
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Card>
    )
}