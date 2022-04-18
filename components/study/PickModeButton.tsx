import { useState } from "react"
import style from "./style.module.css"

interface Props {
    value: string
    isSelected: boolean
    onClick: (value: string) => void
}

export default (props: Props) => {
    const onClick = () => {
        props.onClick(props.value)
    }

    return <div
        onClick={onClick}
        className={style.duolingoButton} style={{ visibility: props.isSelected ? "hidden" : "visible" }}>
        <p className={style.answerChoice}>{props.value}</p>
    </div>
}