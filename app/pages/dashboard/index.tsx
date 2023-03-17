import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { CategoryApi } from '../../api/CategoryApi';
import Seo, { MetaData } from '../../components/common/Seo';
import ScoreList from '../../components/dashboard/ScoreList';
import StudyRecordList from '../../components/dashboard/StudyRecordList';
import TokenAndRankingInfo from '../../components/dashboard/TokenAndRankingInfo';
import UserTextAnalysis from '../../components/dashboard/UserTextAnalysis';
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
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <Seo ogpInfo={ogpInfo} />
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>

                    <div style={{ marginTop: '40px' }} />
                    <TopCategoryRow categories={categoryInfo.popular} rowTitle="勉強を再開しよう" />
                    <div style={{ marginTop: '40px' }} />

                    <Typography variant="h5" gutterBottom component="h1">
                        <b>ダッシュボード</b>
                    </Typography>

                    <Box sx={{
                        border: "10px solid #FFD700",
                        borderRadius: 10,
                        padding: 2
                    }}>
                        <Typography variant="h6">今週の分析結果</Typography>
                        <Typography variant="subtitle2">毎週金曜日18:00にリセットされます。</Typography>
                        <UserTextAnalysis />
                    </Box>

                    {/* <TokenAndRankingInfo />


                    <Paper className={fixedHeightPaper}>
                        <LevelUpInformation />
                    </Paper> */}



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
        </div >
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