import { countReset } from "console"
import React, { useState } from "react"
import Counter from "../../components/Counter"
const myPage = () => {
    const [color, setColor] = useState("white")
    const onClick = () => {
        setColor("blue")
    }

    return (
        <div style={{ background: color }} >
            <button onClick={onClick}>背景色変更</button>
            <Counter />
        </div >
    )
}

export default myPage