import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider, Paper, Typography, ListItem, Button, FormControlLabel, FormGroup, Switch, Tooltip, Grid, Container, IconButton } from "@mui/material"
import { useEffect, useState } from "react";
import classes from "./styles.module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { DashboardListItem } from "../../models/type/DashboardListItem";
import { RecordApi } from "../../api/RecordApi";
import { useRouter } from "next/router";
import useUseHeartConfirmation from "../../models/util-hooks/useUseHeartConfirmation";
import usePlan from "../../models/util-hooks/usePlan";
import TextToSpeechButton from "../speech/TextToSpeechButton";
import useEventSubmit from "../../models/util-hooks/useEventSubmit";

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
    const { dialog, openDialog, setCallbackParameter } = useUseHeartConfirmation("restudy", (studySessionId: string) => {
        submitRestudy()
        router.push("/restudy/" + studySessionId)
    })

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
        openDialog(studySessionId)
        setCallbackParameter(studySessionId)
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
                            <Typography variant="subtitle1" style={{ marginRight: 10 }}>
                                {i.score}
                            </Typography>
                            <Button variant="outlined" onClick={() => restudy(i.studySessionId)}>再挑戦</Button>
                            <div onClick={() => handleClick(i.studySessionId)} style={{ marginLeft: 10, cursor: "pointer" }} >
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </div>
                        </div>

                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Container maxWidth="sm">
                            <List component="div" disablePadding style={{ padding: 20 }}>
                                <Typography variant="subtitle2">{i.questionDescription}</Typography>
                                <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                                    {i.firstEnglish}
                                </Paper>

                                <div className={classes.arrow_box} >
                                    <ArrowDownwardIcon />
                                    <span>お手本の英語</span>
                                </div>

                                {openOpenOtehonIds.includes(i.studySessionId) ?
                                    <div style={{ position: "relative" }}>
                                        <Paper elevation={0} style={{
                                            backgroundColor: "#e6ffed",
                                            padding: "20px"
                                        }} onClick={() => handleClickOtehon(i.studySessionId)}>
                                            {i.translation}
                                        </Paper>
                                        <TextToSpeechButton text={i.translation} />
                                    </div>

                                    : <Paper elevation={0} style={{
                                        backgroundColor: "#FF6347",
                                        opacity: 0.9,
                                        padding: "20px", textAlign: "center", color: "white"
                                    }}
                                        onClick={() => handleClickOtehon(i.studySessionId)}>
                                        お手本を見る
                                    </Paper>

                                }
                            </List>
                        </Container>
                    </Collapse>
                    <Divider />
                </div>
            )
        })
    }

    return <div>
        {dialog}
        <List>
            {renderItems()}
            {isOverflow && <div style={{ textAlign: "center", marginTop: 20 }}>
                <Button variant="outlined" onClick={onClickMore}>もっと見る</Button>
            </div>}
        </List>

    </div>

}