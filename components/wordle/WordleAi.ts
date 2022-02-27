import { answers } from "./const"

export default (answer: string) => {
    if (Math.random() < 0.2) {
        return answer
    } else {
        const candidate = answers[Math.floor(Math.random() * answers.length)]
        return candidate
    }

}