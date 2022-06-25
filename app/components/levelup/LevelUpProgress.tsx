import { Card, IconButton, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import useLevelUp from "../../models/util-hooks/useLevelUp"
import LevelUpProgressBar from "../progress/LevelUpProgressBar"
import LevelUpCongratulation from "./LevelUpCongratulation"
import style from "./style.module.css"
import CloseIcon from '@mui/icons-material/Close';

export default () => {
    const { level, prevLevel, display, closeCard, openCongrat, setOpenCongrat } = useLevelUp()

    const { width, height } = useWindowSize()
    const leftValue = (level?.needExp || 0) - (level?.levelExp || 0)
    const gotExp = (level?.levelExp || 0) - (prevLevel?.levelExp || 0)

    return <>
        <Card className={style.interaction} elevation={10} style={{
            opacity: display ? 1 : 0,
            transform: display ? "scale(1)" : "scale(0)"
        }}>
            <IconButton style={{ position: "absolute", right: 5, top: 5 }} onClick={closeCard}>
                <CloseIcon />
            </IconButton>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>Lv. {level?.level}</Typography>
            <div style={{ height: 10 }} />
            <LevelUpProgressBar
                value={level?.levelExp || 0}
                maxValue={level?.needExp || 0} />
            <div style={{ height: 10 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }} color="primary">+{gotExp}pt</Typography>
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
