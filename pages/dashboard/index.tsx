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
import Seo, { MetaData } from '../../components/common/Seo';
import Deposits from '../../components/dashboard/Deposits';
import StudyRecordList from '../../components/dashboard/StudyRecordList';
import LevelUpInformation from '../../components/levelup/LevelUpInformation';
import QuestList from '../../components/quest/QuestList';
import FloatingTryTodayQuestion from '../../components/today/FloatingTryTodayQuestion';
import TopCategoryRow from '../../components/top/TopCategoryRow';
import { Category } from '../../models/type/Category';
import classes from "./style.module.css";

function Dashboard({ categoryInfo, ogpInfo }: {
    categoryInfo: {
        "new": Category[],
        "popular": Category[],
        "free": Category[]
    }, ogpInfo: MetaData
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
            <Seo ogpInfo={ogpInfo} />
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    <TopCategoryRow categories={categoryInfo.popular} rowTitle="勉強を再開しよう" />
                    <div style={{ marginTop: '40px' }} />

                    <Typography variant="h5" gutterBottom component="h1">
                        <b>ダッシュボード</b>
                    </Typography>


                    <Paper className={fixedHeightPaper}>
                        <LevelUpInformation />
                    </Paper>

                    <Grid container spacing={1}>
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits
                                    title='平均スコア'
                                    score={averageScore} />
                            </Paper>
                        </Grid>
                        {ages.length > 0 &&
                            <Grid item xs={4} md={4} lg={4}>
                                <Paper className={fixedHeightPaper}>
                                    <Deposits
                                        title='平均英語年齢'
                                        score={averageAge} />
                                </Paper>
                            </Grid>
                        }
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits
                                    title='勉強した回数'
                                    score={scores.length} />
                            </Paper>
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
            <FloatingTryTodayQuestion />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const categoryInfo = await CategoryApi.getCategoryList()
    const ogpInfo: MetaData = {
        title: "ダッシュボード・問題集",
        pagePath: `/dashboard`,
    }
    return {
        props: {
            categoryInfo,
            ogpInfo
        }
    }
}

export default Dashboard;