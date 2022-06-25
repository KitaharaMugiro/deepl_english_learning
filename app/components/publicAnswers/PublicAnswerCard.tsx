import { Card, Typography } from "@mui/material"
import { useMemo } from "react"
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {
    answer: string
    description?: string | null
    age?: number | null
}
export default (props: Props) => {
    const config = useMemo(() => genConfig({}), [props.answer])

    return <Card variant="outlined"
        style={{ display: "flex", padding: 20, margin: 10, alignItems: "center" }}>
        <div style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
        }}>
            <Avatar key={props.answer} style={{
                flexShrink: 0,
                width: 60, height: 60, marginRight: 20
            }} {...config} />
            {props.age && <Typography variant="caption">{props.age}歳相当</Typography>}
        </div>

        <div>
            <Typography variant="body1">{props.answer}</Typography>
            <Typography variant="caption">{props.description}</Typography>
        </div>
    </Card>

}