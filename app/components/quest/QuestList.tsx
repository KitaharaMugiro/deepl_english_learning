import { Button, Card, Checkbox, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EventApi } from "../../api/EventApi";
import { RecordApi } from "../../api/RecordApi";
import { DashboardListItem } from "../../models/type/DashboardListItem";
import { EventItem } from "../../models/type/EventItem";
import QuestCard from "./QuestCard";

interface Props {
    displayMaxSize?: number
    onClickMore?: () => void
}

export default (props: Props) => {
    const router = useRouter()
    const [items, setItems] = useState<EventItem[]>([]);
    const isOverflow = props.displayMaxSize && items.length > props.displayMaxSize


    const onClickMore = () => {
        if (props.onClickMore) {
            props.onClickMore()
        }
    }

    useEffect(() => {
        const getData = async () => {
            const data = await EventApi.getEventList()
            setItems(data)
        }
        getData()
    }, [])

    const renderItems = () => {
        return items.map((i, index) => {
            if (props.displayMaxSize && index >= props.displayMaxSize) return null
            return <QuestCard
                eventId={i.eventId}
                eventTitle={i.eventTitle}
                eventDescription={i.eventDescription}
                done={i.done}
                url={i.url} />
        })
    }

    return <div>
        <List>
            {renderItems()}
            {isOverflow && <div style={{ textAlign: "center", marginTop: 20 }}>
                <Button variant="outlined" onClick={onClickMore}>もっと見る</Button>
            </div>}
        </List>

    </div>

}