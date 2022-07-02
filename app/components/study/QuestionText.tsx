import { useAtom } from "jotai"
import React from "react"
import { AtomActiveQuestion } from "../../models/jotai/StudyJotai"
import styles from "./style.module.css"

interface Props {
    displayLanguage: "english" | "japanese"
}

export default (props: Props) => {
    const [activeQuestion] = useAtom(AtomActiveQuestion)
    const displayTitle = () => {
        if (props.displayLanguage === "english") {
            return activeQuestion.titleEng || activeQuestion.title
        }
        return activeQuestion.title
    }

    const displayDescription = () => {
        if (props.displayLanguage === "english") {
            return activeQuestion.descriptionEng || activeQuestion.description
        }
        return activeQuestion.description
    }
    return (
        <>
            <div className={styles.question_mark}>
                Q
            </div>

            <h2 style={{ fontWeight: 700 }} >
                {displayTitle()}
            </h2>

            <p style={{ color: "#677284", marginTop: "15px" }}>
                {displayDescription()}
            </p>
        </>
    )
}