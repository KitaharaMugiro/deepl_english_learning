import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useCountdownTimer } from "use-countdown-timer";
import SchoolIcon from '@mui/icons-material/School';
import { TodayApi } from "../../api/TodayApi";

const formatTime = (time: number) => {
    const hours = Math.floor(time / 1000 / 60 / 60)
    const minutes = Math.floor((time - hours * 60 * 60 * 1000) / 1000 / 60)
    const seconds = Math.floor((time - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000)
    const hourStr = ('00' + hours).slice(-2)
    const minuteStr = ('00' + minutes).slice(-2)
    const secondStr = ('00' + seconds).slice(-2)
    return <span>{hourStr}:{minuteStr}:{secondStr}</span>
}


export default () => {
    const [alreadyTestTaken, setAlreadyTestTaken] = useState(false)
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
                variant="extended"
                color="primary"
                style={{ backgroundColor: 'lightgrey' }}
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
    )
}