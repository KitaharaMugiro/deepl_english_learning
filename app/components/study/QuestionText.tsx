import { useAtom } from "jotai"
import React from "react"
import { AtomActiveQuestion } from "../../models/jotai/StudyJotai"
import styles from "./style.module.css"
export default () => {
    const [activeQuestion] = useAtom(AtomActiveQuestion)

    return (
        <>
            <div className={styles.question_mark}>
                Q
            </div>

            <h2 style={{ fontWeight: 700 }} >
                {activeQuestion.title}
            </h2>

            <p style={{ color: "#677284", marginTop: "15px" }}>
                {activeQuestion.description}
            </p>
        </>
    )
}