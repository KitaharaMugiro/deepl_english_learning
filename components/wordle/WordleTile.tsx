import { WordleColors } from "./const";
import style from "./index.module.css";

interface Props {
    char: string
    colorType: "yellow" | "green" | "grey" | "none"
}

export default (props: Props) => {
    const backgroundColor = WordleColors[props.colorType]
    const color = props.colorType === "none" ? "black" : "white"
    return <div className={style.tile} style={{ backgroundColor, color }}>
        {props.char}
    </div>
}