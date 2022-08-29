import { Avatar } from "@mui/material"
import React from "react"

interface Props {
    displayLanguage: "english" | "japanese"
}

export default (props: Props) => {
    const displayTitle = () => {
        if (props.displayLanguage === "english") {
            return "How was your day?"
        }
        return "今日は何をしたの？"
    }
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Avatar sx={{ width: 75, height: 75 }} alt="cat" src="https://pbs.twimg.com/profile_images/1511649023848960007/qd7nIFBQ_400x400.jpg" />
            </div>

            <h2 style={{ fontWeight: 700, marginLeft: 10 }} >
                {displayTitle()}
            </h2>
        </div>
    )
}