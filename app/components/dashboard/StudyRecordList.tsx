import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Collapse, Container, Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RecordApi } from "../../api/RecordApi";
import { DashboardListItem } from "../../models/type/DashboardListItem";
import useEventSubmit from "../../models/util-hooks/useEventSubmit";
import usePlan from "../../models/util-hooks/usePlan";
import TextToSpeechButton from "../speech/TextToSpeechButton";
import classes from "./styles.module.css";
import SwitchableEnglishCard from "./SwitchableEnglishCard";

interface Props {
    displayMaxSize?: number
    onClickMore?: () => void
}

export default (props: Props) => {
    const router = useRouter()
    const { isPremium, openPlanModal } = usePlan()
    const [openStudySessionIds, setOpenStudySessionIds] = useState<string[]>([]);
    const [openOpenOtehonIds, setOpenOtehonIds] = useState<string[]>([]);
    const [items, setItems] = useState<DashboardListItem[]>([]);
    const { submitRestudy } = useEventSubmit()

    const isOverflow = props.displayMaxSize && items.length > props.displayMaxSize

    const handleClick = (studySessionId: string) => {
        const newOpenStudySessionIds = openStudySessionIds.includes(studySessionId) ?
            openStudySessionIds.filter(id => id !== studySessionId) :
            [...openStudySessionIds, studySessionId];
        setOpenStudySessionIds(newOpenStudySessionIds);
    };

    const handleClickOtehon = (studySessionId: string) => {
        const newOne = openOpenOtehonIds.includes(studySessionId) ?
            openOpenOtehonIds.filter(id => id !== studySessionId) :
            [...openOpenOtehonIds, studySessionId];
        setOpenOtehonIds(newOne);
    };


    const restudy = (studySessionId: string) => {
        if (!isPremium) {
            openPlanModal()
            return
        }
        // openDialog(studySessionId)
        // setCallbackParameter(studySessionId)
        submitRestudy()
        router.push("/restudy/" + studySessionId)
    }

    const onClickMore = () => {
        if (props.onClickMore) {
            props.onClickMore()
        }
    }

    useEffect(() => {
        const getData = async () => {
            const data = await RecordApi.getDashboardList()
            setItems(data)
        }
        getData()
    }, [])

    const renderItems = () => {
        return items.map((i, index) => {
            const open = openStudySessionIds.includes(i.studySessionId)
            if (props.displayMaxSize && index >= props.displayMaxSize) return null
            return (
                <div key={i.studySessionId}>
                    <ListItem disableGutters>
                        <ListItemText primary={i.questionTitle} style={{ marginRight: 20, cursor: "pointer" }} onClick={() => handleClick(i.studySessionId)} />

                        <div style={{ display: "flex", width: 160, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", flexShrink: 0 }}>
                            {/* <Button variant="outlined" onClick={() => restudy(i.studySessionId)}>再挑戦</Button> */}
                            <div onClick={() => handleClick(i.studySessionId)} style={{ marginLeft: 10, cursor: "pointer" }} >
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </div>
                        </div>

                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Container maxWidth="sm">
                            <List component="div" disablePadding style={{ padding: 20 }}>
                                <Typography variant="subtitle2">{i.japanese}</Typography>
                                <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                                    {i.firstEnglish}
                                </Paper>

                                <div className={classes.arrow_box} >
                                    <ArrowDownwardIcon />
                                    <span>お手本の英語</span>
                                </div>

                                <SwitchableEnglishCard
                                    hide={!openOpenOtehonIds.includes(i.studySessionId)}
                                    studySessionId={i.studySessionId}
                                    handleClickOtehon={handleClickOtehon}
                                    translation={i.translation}
                                />
                            </List>
                        </Container>

                    </Collapse>
                    <Divider />
                </div>
            )
        })
    }

    return <div>
        {/* {dialog} */}
        <List>
            {renderItems()}
            {isOverflow && <div style={{ textAlign: "center", marginTop: 20 }}>
                <Button variant="outlined" onClick={onClickMore}>もっと見る</Button>
            </div>}
        </List>

    </div>

}