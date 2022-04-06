import { Card, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import useLevelUp from "../../models/util-hooks/useLevelUp"
import LevelUpProgressBar from "../progress/LevelUpProgressBar"
import LevelUpCongratulation from "./LevelUpCongratulation"
import style from "./style.module.css"

export default () => {
    const { level, display, openCongrat, setOpenCongrat } = useLevelUp()

    const { width, height } = useWindowSize()
    const leftValue = (level?.needExp || 0) - (level?.levelExp || 0)

    return <>
        <Card className={style.interaction} elevation={10} style={{
            opacity: display ? 1 : 0,
            transform: display ? "scale(1)" : "scale(0)",
        }}>
            <Typography variant="h3">Lv. {level?.level}</Typography>
            <div style={{ height: 10 }} />
            <LevelUpProgressBar
                value={level?.levelExp || 0}
                maxValue={level?.needExp || 0} />
            <div style={{ height: 10 }} />
            <Typography variant="subtitle2">レベルアップまであと: {leftValue}pt</Typography>
        </Card>
        <LevelUpCongratulation
            open={openCongrat}
            level={level?.level || 0}
            onClose={() => setOpenCongrat(false)}
            width={width}
            height={height}
        />

    </>
}
