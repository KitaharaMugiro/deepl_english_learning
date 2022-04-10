import { Typography } from "@mui/material"
import useLevelUp from "../../models/util-hooks/useLevelUp"
import LevelUpProgressBar from "../progress/LevelUpProgressBar"

export default () => {
    const { level } = useLevelUp()
    const leftValue = (level?.needExp || 0) - (level?.levelExp || 0)

    return <div>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>Lv. {level?.level}</Typography>
        <div style={{ height: 10 }} />
        <LevelUpProgressBar
            value={level?.levelExp || 0}
            maxValue={level?.needExp || 0} />
        <div style={{ height: 10 }} />
        <Typography variant="subtitle2">レベルアップまであと: {leftValue}pt</Typography>
    </div>
}