import { Card, Typography, Divider, Grid } from "@mui/material"
import DiscordButton from "../../components/info/DiscordButton"
import style from "./style.module.css"

export default () => {
    return (

        <Grid container alignItems="center" justifyContent="center">
            <Grid item >
                <Card elevation={1} style={{ padding: 20, paddingBottom: 40, margin: 20 }}>
                    <Typography
                        component="h1" variant="h4"
                        align="center" color="textPrimary"
                        gutterBottom>
                        <b>Englister Community</b>
                    </Typography>
                    <Divider style={{ margin: 20 }} />
                    <Typography align="center" color="textSecondary" paragraph>
                        <ul className={style.ul}>
                            <li>継続する人たちのコミュニティ</li>
                            <li>Englisterは勉強になるが<b>継続できない人</b>におすすめ</li>
                            <li>AIのお手本もいいけど、<b>英語の先生にもチェックしてもらいたい人</b>におすすめ</li>
                            <li>英作文力の<b>実力を試したい人</b>におすすめ(毎日Englisterが1問英作文の問題を出します)</li>
                            <li>英会話やりたい人にもおすすめ</li>
                        </ul>
                    </Typography>

                    <div style={{
                        marginTop: "40px",
                    }}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <DiscordButton url="https://discord.gg/eAscQ5eh" />
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </Grid>
        </Grid>

    )
}