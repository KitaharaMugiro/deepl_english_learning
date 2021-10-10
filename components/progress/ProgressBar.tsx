import { useEffect, useState } from "react"
import style from "./style.module.css"
interface Props {
    value: number
    maximum: number
}

export default (props: Props) => {
    const [barWidth, setBarWidth] = useState("0%")

    useEffect(() => {
        const ratio = (props.value * 100 / props.maximum)
        console.log({ ratio })
        setBarWidth(ratio + "%")
    }, [props.value])

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

            <div className={style.progress}>
                <div
                    className={`${style.bar} ${style.shadow} ${style.indeterminate_16} ${style.dots}`}
                    style={{ width: barWidth }}></div>
            </div>
            {props.value}/{props.maximum}
        </div>

    )
}