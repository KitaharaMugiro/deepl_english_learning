import { Button, Paper } from "@mui/material"
import { useState } from "react"
import SwitchableEnglishCard from "../dashboard/SwitchableEnglishCard"
import TextToSpeechButton from "../speech/TextToSpeechButton"
import ReactDiffViewer, { DiffMethod } from 'ab-react-diff-viewer';
import classes from "./style.module.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface Props {
    english: string
    translation: string
    fromDiary?: boolean
}

export default (props: Props) => {
    const [hideOtehon, setHideOtehon] = useState(false)
    const [visibleDiff, setVisibleDiff] = useState(props.fromDiary || false)

    const changeView = () => {
        setVisibleDiff(!visibleDiff)
    }

    const renderDiffOrReview = () => {
        if (visibleDiff) {
            return (
                <div style={{ position: "relative" }}>
                    <ReactDiffViewer
                        oldValue={props.english}
                        newValue={props.translation}
                        splitView={true}
                        hideLineNumbers={true}
                        showDiffOnly={false}
                        leftTitle="Yours"
                        rightTitle="お手本"
                        compareMethod={DiffMethod.WORDS}
                    />
                    <TextToSpeechButton text={props.translation} />
                </div>

            )
        } else {
            return (
                <div>
                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px" }}>
                        {props.english}
                    </Paper>

                    <div className={classes.arrow_box} >
                        <ArrowDownwardIcon />
                        <span>お手本の英語</span>
                    </div>

                    <SwitchableEnglishCard
                        hide={hideOtehon}
                        studySessionId=""
                        handleClickOtehon={() => setHideOtehon(!hideOtehon)}
                        translation={props.translation}
                        english={props.english}
                    />
                </div>
            )
        }
    }

    return <>
        {renderDiffOrReview()}
        <Button onClick={changeView}>ビューを切り替える</Button>
    </>

}