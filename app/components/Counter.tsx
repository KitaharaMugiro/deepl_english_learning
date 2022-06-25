import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 onClick={onClick}>
                カウント : {count}
            </h1>
        </div>
    )
}