import { Avatar } from "@mui/material"
import React from "react"

interface Props {
    displayLanguage: "english" | "japanese"
}

//とりあえず適当にお題を用意した
const diaryQuestions = [
    "What was the best thing that happened to you today?",
    "How was your day?",
    "What is something that made you laugh today?",
    "What is one thing you want to remember from today?",
    "How can you make tomorrow (even) better than today?",
    "What steps did you take today towards a goal you’re working on?",
    "Describe something you learned today that you didn’t know before.",
    "What frightened you today?",
    "How were your meals today?"
];

export default React.memo((props: Props) => {
    const displayTitle = () => {
        if (props.displayLanguage === "english") {
            return diaryQuestions[Math.floor(Math.random() * diaryQuestions.length)]
        }
        return "今日は何をしたの？"
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <div>
                    <Avatar sx={{ width: 75, height: 75 }} alt="cat" src="/static/englister_cat.jpeg" />
                </div>
                <div>
                    <h2 style={{ fontWeight: 700, marginLeft: 10 }} >
                        {displayTitle()}
                        <p style={{ fontSize: 15, fontWeight: 15, margin: 0 }}>You can write whatever you want, not questions.</p>
                    </h2>
                </div>

            </div>

        </>
    )
})