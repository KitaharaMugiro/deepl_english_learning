import { Grid, Paper } from '@mui/material';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { RecordApi } from '../../api/RecordApi';
import Deposits from './Deposits';
import classes from "./style.module.css";

export default () => {
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

    return <>
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
        </Grid></>
}