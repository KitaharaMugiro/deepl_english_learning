import { useState } from "react"
import style from "./style.module.css"

interface Props {
    value: string
    onClick: (value: string) => void
}

export default (props: Props) => {
    const [display, setDisplay] = useState(true)
    const onClick = () => {
        props.onClick(props.value)
        setDisplay(false)
    }

    return <div
        onClick={onClick}
        className={style.duolingoButton} style={{ visibility: display ? "visible" : "hidden" }}>
        <p className={style.answerChoice}>{props.value}</p>
    </div>
}