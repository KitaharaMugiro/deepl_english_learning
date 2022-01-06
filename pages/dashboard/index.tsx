import { Fab, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { RecordApi } from '../../api/RecordApi';
import Chart from '../../components/dashboard/Chart';
import Deposits from '../../components/dashboard/Deposits';
import classes from "./style.module.css";

export default function Dashboard() {

    const [scores, setScores] = useState<number[]>([])


    useEffect(() => {
        const getScoreList = async () => {
            const scoreList = await RecordApi.getScoreList()
            const _data = scoreList.map(s => s.score)
            setScores(_data)
        }
        getScoreList()
    }, [])

    const averageScore = scores.length === 0 ? 0 : Math.round(scores.reduce((a, b) => (a + b)) / scores.length * 10) / 10


    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart data={scores} />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits
                                    score={averageScore} />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        {/* <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid> */}
                    </Grid>
                </Container>
                <Fab
                    variant="extended"
                    color="primary"
                    style={{ position: "absolute", right: 30, bottom: 30 }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link" >
                    <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
                        事前登録受付中
                    </Typography>

                </Fab>
            </main>
        </div>
    );
}