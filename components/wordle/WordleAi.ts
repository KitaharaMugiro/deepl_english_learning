import { answers } from "./const"

export default (answer: string, activeRow: number) => {
    let possibility = 0
    if (activeRow === 5) {
        possibility = 0.9
    } else if (activeRow === 4) {
        possibility = 0.4
    } else if (activeRow === 3) {
        possibility = 0.2
    } else if (activeRow === 2) {
        possibility = 0.1
    } else if (activeRow === 1) {
        possibility = 0.1
    } else if (activeRow === 0) {
        possibility = 0
    }
    if (Math.random() < possibility) {
        return answer
    } else {
        const candidate = answers[Math.floor(Math.random() * answers.length)]
        return candidate
    }

}