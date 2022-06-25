import { useState } from "react";
import { useCountdownTimer } from "use-countdown-timer";

export default (timer: number) => {
    const [isExpired, setIsExpired] = useState(false)
    const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
        timer: timer,
        interval: 21,
        onExpire: () => {
            setIsExpired(true)
            console.log("Expired")
        }
    });

    const formatTime = (time: number) => {
        if (isExpired) {
            return <span style={{ color: "red" }}>00:00:00</span>
        }
        const minutes = Math.floor(time / 1000 / 60)
        const seconds = Math.floor((time - minutes * 60 * 1000) / 1000)
        const millsec = Math.floor(time - minutes * 60 * 1000 - seconds * 1000)
        const minuteStr = ('00' + minutes).slice(-2)
        const secondStr = ('00' + seconds).slice(-2)
        const millsecStr = ('00' + millsec).slice(-2)
        return <span>{minuteStr}:{secondStr}:{millsecStr}</span>
    }


    const view = formatTime(countdown)


    return { countdown, start, view }
}