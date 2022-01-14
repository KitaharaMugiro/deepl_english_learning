import { Fab, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { RecordApi } from '../../api/RecordApi';
import FloatingLoginButton from '../../components/common/FloatingLoginButton';
import Chart from '../../components/dashboard/Chart';
import Deposits from '../../components/dashboard/Deposits';
import StudyRecordList from '../../components/dashboard/StudyRecordList';
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
                <Container maxWidth="xl" className={classes.container}>
                    <Typography variant="h4" gutterBottom component="h2">
                        <b>Recent Study Record</b>
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={12} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart data={scores} />
                            </Paper>
                        </Grid>

                        {/* Recent Deposits */}
                        <Grid item xs={12} md={12} lg={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6} lg={12}>
                                    <Paper className={fixedHeightPaper}>
                                        <Deposits
                                            title='Average Score'
                                            score={averageScore} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} md={6} lg={12}>
                                    <Paper className={fixedHeightPaper}>
                                        <Deposits
                                            title='Exam Taken'
                                            score={scores.length} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography variant="h5" component="h3" style={{ marginTop: 20 }}>
                        学習履歴
                    </Typography>

                    <StudyRecordList />
                </Container>

                <FloatingLoginButton />
            </main>

        </div>
    );
}