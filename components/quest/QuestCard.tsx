import { RoundaboutLeftRounded } from "@mui/icons-material"
import { Card, Checkbox, ListItem, ListItemText } from "@mui/material"
import { Router, useRouter } from "next/router"
import { useSnackMessage } from "../../models/util-hooks/useSnackMessage"
import style from "./style.module.css"

interface Props {
    eventId: string
    eventTitle: string
    eventDescription: string
    done: boolean
    url: string
}

export default (props: Props) => {
    const router = useRouter()
    const { displayInfoMessage } = useSnackMessage()
    const onClickItem = () => {
        if (props.done) return
        router.push(props.url)
        displayInfoMessage(props.eventTitle)
    }

    return (
        <Card key={props.eventId} className={props.done ? style.disableCard : style.card} onClick={onClickItem}>
            <div style={{ display: "flex" }}>
                <Checkbox onClick={onClickItem} checked={props.done} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                <ListItem>
                    <ListItemText primary={props.eventTitle} secondary={props.eventDescription} />
                </ListItem>
            </div>
        </Card>
    )
}