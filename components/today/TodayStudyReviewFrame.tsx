import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Fab, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GetTodayTopicResponse, TodayApi } from '../../api/TodayApi';
import TextToSpeechButton from '../speech/TextToSpeechButton';
import Image from "next/image"
import PublicAnswers from '../publicAnswers/PublicAnswers';
import TodayPublicAnswers from './TodayPublicAnswers';
import DictionarySearchSelector from '../common/DictionarySearchSelector';
import { TwitterShareButton, TwitterIcon } from "react-share";
import TodayShareButtons from './TodayShareButtons';
import { AtomName } from '../../models/jotai/StudyJotai';
import { useAtom } from 'jotai';
import { useCountdownTimer } from 'use-countdown-timer';
import SchoolIcon from '@mui/icons-material/School';
import { Router, useRouter } from 'next/router';
interface Props {
    todayTopicResult: GetTodayTopicResponse
}

const formatTime = (time: number) => {
    const hours = Math.floor(time / 1000 / 60 / 60)
    const minutes = Math.floor((time - hours * 60 * 60 * 1000) / 1000 / 60)
    const seconds = Math.floor((time - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000)
    const hourStr = ('00' + hours).slice(-2)
    const minuteStr = ('00' + minutes).slice(-2)
    const secondStr = ('00' + seconds).slice(-2)
    return <span>{hourStr}:{minuteStr}:{secondStr}</span>
}

export default (props: Props) => {
    if (!process.browser) return null;
    const { question } = props.todayTopicResult
    const { answer } = props.todayTopicResult

    const [name] = useAtom(AtomName)
    const [alreadyTestTaken, setAlreadyTestTaken] = useState(false)
    const isYourAnswer = name === answer?.name //WARN: この判別は正しくない・・

    const START_TIME = 18
    const now = new Date(); //現在時刻を取得
    let nextDate = new Date()
    if (now.getHours() >= START_TIME) {
        nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, START_TIME);
    } else {
        nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), START_TIME);
    }
    const { countdown } = useCountdownTimer({
        timer: (nextDate.getTime() - now.getTime()),
        autostart: true,
        interval: 1000,
        onExpire: () => {
            window.location.href = '/today'
        }
    });
    const renderTry = () => {
        if (alreadyTestTaken) {
            return <Fab
                variant="extended" color="primary"
                disabled
            >
                <SchoolIcon sx={{ mr: 1 }} />
                次回の英語年齢診断　{formatTime(countdown)}
            </Fab>
        } else {
            return <Fab
                style={{ paddingLeft: 50, paddingRight: 50 }}
                href="/today"
                variant="extended" color="primary" aria-label="add">
                <SchoolIcon sx={{ mr: 1 }} />
                英語年齢診断スタート
            </Fab>
        }
    }

    useEffect(() => {
        const getStatus = async () => {
            const todayTopicResult = await TodayApi.getTodayTopic()
            if (todayTopicResult.answer) {
                setAlreadyTestTaken(true)
            }
        }
        getStatus()
    }, [])

    return (
        <>
            <div style={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bottom: 0,
                width: "100%",
                padding: 20,
                zIndex: 1000
            }}>
                {renderTry()}
            </div>
            <main style={{
                width: 'auto',
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <Paper style={{
                    marginTop: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    <img src={`/static/ogp/スライド${(answer?.age || 0) + 1}.png`} style={{ width: "100%" }} />
                    <div style={{ height: 15 }} />

                    <h2 style={{ fontWeight: 700 }} >
                        {question.title}
                    </h2>

                    <p style={{ color: "#677284", marginTop: "15px" }}>
                        {question.description}
                    </p>

                    <Typography
                        variant="subtitle2"
                        style={{ marginBottom: 0, marginTop: 10 }}>
                        <b>{answer?.name}</b>さんが日本語で書いた意見
                    </Typography>
                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                        {answer?.japanese}
                    </Paper>

                    <Typography
                        variant="subtitle2"
                        style={{ marginBottom: 0, marginTop: 10 }}>
                        <b>{answer?.name}</b>さんが英語で書いた意見
                    </Typography>

                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                        {answer?.english}
                    </Paper>

                    <div style={{
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <ArrowDownwardIcon />
                        <span>お手本の英語</span>
                    </div>

                    <div style={{ position: "relative" }}>
                        <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", fontSize: "larger" }}>
                            {answer?.translation}
                        </Paper>
                        <TextToSpeechButton text={answer?.translation || ""} />
                    </div>

                    <div style={{ height: 25 }} />


                    {isYourAnswer && <TodayShareButtons
                        name={answer?.name || ""}
                        resultId={answer?.resultId || ""} />}


                    <div style={{ height: 25 }} />

                    <TodayPublicAnswers topicId={props.todayTopicResult.question.topicId} />
                </Paper>


                <DictionarySearchSelector />


            </main>
        </>
    );
}

