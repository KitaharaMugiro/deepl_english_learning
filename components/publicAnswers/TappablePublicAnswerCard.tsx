import { Card, CardActionArea } from "@mui/material"
import { useMemo } from "react"
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {
    answer: string
    onClick: () => void
}
export default (props: Props) => {
    const config = useMemo(() => genConfig({}), [props.answer])

    return <Card variant="outlined"
        style={{ margin: 10 }}>
        <CardActionArea
            onClick={props.onClick}
            style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", padding: 20 }}>
            <Avatar
                key={props.answer} style={{
                    width: 60, height: 60, marginRight: 20,
                    flexShrink: 0
                }} {...config} />
            {props.answer}
        </CardActionArea>
    </Card>

}