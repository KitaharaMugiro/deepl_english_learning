import { Button, Card, Grid, Paper, Typography } from "@mui/material"
import useToken from "../../models/util-hooks/useToken"
import DiamondIcon from '@mui/icons-material/Diamond';
import Deposits from "./Deposits";
import classes from "./style.module.css";
import clsx from 'clsx';
import useRanking from "../../models/util-hooks/useRanking";
import { useEffect } from "react";

export default () => {
    const { token, tokenRateJpy, createdAt } = useToken()
    const createdAtString = new Date(createdAt).toLocaleString()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const { refresh, userRow } = useRanking()
    useEffect(() => {
        refresh()
    }, [])

    const renderUserRank = () => {
        if (!userRow) return <>未参加(問題を解いて参加)</>
        return <>{userRow?.rank}位</>
    }

    return <>
        <Grid container spacing={1}>
            <Grid item xs={4} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                    <Deposits
                        title='保有トークン'
                        score={<>
                            <span style={{ display: "flex", alignItems: "center" }} >
                                {token}
                                <DiamondIcon color="primary" fontSize="large" />
                            </span>
                        </>} />
                    <div style={{ height: 10 }} />
                    <Button href="/token" variant="outlined" disableElevation>トークンを出金する</Button>
                </Paper>
            </Grid>


            <Grid item xs={4} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                    <Deposits
                        title='週間ランキング'
                        score={renderUserRank()} />
                    <div style={{ height: 10 }} />

                    <Button
                        href="/weeklyRanking"
                        variant="outlined" disableElevation>ランキングを見る</Button>

                </Paper>
            </Grid>
        </Grid></>
}