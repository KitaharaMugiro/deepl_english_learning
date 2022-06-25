import { WordleColors } from "./const";
import style from "./index.module.css";

interface Props {
    char: string
    suggestChar?: string
    colorType: "yellow" | "green" | "grey" | "none"
}

export default (props: Props) => {
    const backgroundColor = WordleColors[props.colorType]
    const color = props.colorType === "none" ? "black" : "white"
    if (props.char) {
        return <div className={style.tile} style={{ backgroundColor, color }}>
            {props.char}
        </div>
    } else if (props.suggestChar) {
        return <div className={style.tile} style={{ backgroundColor, color: "#969892" }}>
            {props.suggestChar}
        </div>
    } else {
        return <div className={style.tile} style={{ backgroundColor, color }}>

        </div>
    }

}