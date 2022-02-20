import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CategoryApi } from '../../api/CategoryApi';
import { RecordApi } from '../../api/RecordApi';
import Chart from '../../components/dashboard/Chart';
import Deposits from '../../components/dashboard/Deposits';
import StudyRecordList from '../../components/dashboard/StudyRecordList';
import QuestList from '../../components/quest/QuestList';
import TopCategoryRow from '../../components/top/TopCategoryRow';
import { Category } from '../../models/type/Category';
import classes from "./style.module.css";

function Dashboard({ categoryInfo }: {
    categoryInfo: {
        "new": Category[],
        "popular": Category[],
        "free": Category[]
    }
}) {
    const router = useRouter()
    const [scores, setScores] = useState<{ score: number, createdAt: Date, age: number }[]>([])
    useEffect(() => {
        const getScoreList = async () => {
            const scoreList = await RecordApi.getScoreList()
            const _scores = scoreList.map(s => {
                return { score: s.score, createdAt: new Date(s.createdAt), age: s.age || 0 }
            }).filter(s => s.score)
            setScores(_scores)
        }
        getScoreList()
    }, [])

    const averageScore = scores.length === 0 ? 0 : Math.round(scores.map(r => r.score).reduce((a, b) => (a + b), 0) / scores.length * 10) / 10
    const averageAge = scores.length === 0 ? 0 : Math.round(scores.filter(r => r.age).map(r => r.age).reduce((a, b) => (a + b), 0) / scores.filter(r => r.age).length)
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const ages = scores.map(s => s.age).filter(s => s)

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    <TopCategoryRow categories={categoryInfo.popular} rowTitle="勉強する" />
                    <Typography variant="h4" gutterBottom component="h2">
                        <b>ダッシュボード</b>
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={12} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart data={scores.map(s => s.score)} date={scores.map(s => s.createdAt.toDateString())} title="スコア推移" />
                            </Paper>
                            {ages.length > 0 &&
                                <Paper className={fixedHeightPaper}>
                                    <Chart data={scores.filter(s => s.age).map(s => s.age)} date={scores.filter(s => s.age).map(s => s.createdAt.toDateString())} title="年齢推移" />
                                </Paper>}
                        </Grid>

                        {/* Recent Deposits */}
                        <Grid item xs={12} md={12} lg={3}>
                            <Grid container spacing={1}>
                                <Grid item xs={4} md={4} lg={12}>
                                    <Paper className={fixedHeightPaper}>
                                        <Deposits
                                            title='Average Score'
                                            score={averageScore} />
                                    </Paper>
                                </Grid>
                                {ages.length > 0 &&
                                    <Grid item xs={4} md={4} lg={12}>
                                        <Paper className={fixedHeightPaper}>
                                            <Deposits
                                                title='Average Age'
                                                score={averageAge} />
                                        </Paper>
                                    </Grid>
                                }
                                <Grid item xs={4} md={4} lg={12}>
                                    <Paper className={fixedHeightPaper}>
                                        <Deposits
                                            title='Exam Taken'
                                            score={scores.length} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={6} lg={6}>
                            <Container maxWidth="md" >
                                <Typography variant="h5" component="h3" style={{ marginTop: 20 }}>
                                    学習履歴
                                </Typography>

                                <StudyRecordList displayMaxSize={5} onClickMore={() => router.push("/restudy")} />
                            </Container>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <Container maxWidth="md" >
                                <Typography variant="h5" component="h3" style={{ marginTop: 20 }}>
                                    クエスト
                                </Typography>

                                <QuestList displayMaxSize={3} onClickMore={() => router.push("/quest")} />
                            </Container>
                        </Grid>
                    </Grid>
                </Container >
            </main>

        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const categoryInfo = await CategoryApi.getCategoryList()
    return {
        props: {
            categoryInfo
        }
    }
}

export default Dashboard;