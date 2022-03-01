import { matcher } from "./AnswerMatcher"
import WordleTile from "./WordleTile"

interface Props {
    row: string,
    userInput: string | null,
    answer: string,
}

function getChar(text: Array<string>, index: number) {
    if (index < 0 || index >= text.length) {
        return null
    }
    return text[index]
}

export default (props: Props) => {


    if (props.row === "") {
        if (props.userInput) {
            const chars = props.userInput.split("")
            return <div style={{ display: "flex" }}>
                <WordleTile char={getChar(chars, 0) || ""} colorType="none" />
                <WordleTile char={getChar(chars, 1) || ""} colorType="none" />
                <WordleTile char={getChar(chars, 2) || ""} colorType="none" />
                <WordleTile char={getChar(chars, 3) || ""} colorType="none" />
                <WordleTile char={getChar(chars, 4) || ""} colorType="none" />
            </div>
        }
        return <div style={{ display: "flex" }}>
            <WordleTile char="" colorType="none" />
            <WordleTile char="" colorType="none" />
            <WordleTile char="" colorType="none" />
            <WordleTile char="" colorType="none" />
            <WordleTile char="" colorType="none" />
        </div>
    }
    const result = matcher(props.row, props.answer)
    const chars = props.row.split("")
    return <div style={{ display: "flex" }}>
        <WordleTile char={getChar(chars, 0) || ""} colorType={result[0] as any} />
        <WordleTile char={getChar(chars, 1) || ""} colorType={result[1] as any} />
        <WordleTile char={getChar(chars, 2) || ""} colorType={result[2] as any} />
        <WordleTile char={getChar(chars, 3) || ""} colorType={result[3] as any} />
        <WordleTile char={getChar(chars, 4) || ""} colorType={result[4] as any} />
    </div>
}