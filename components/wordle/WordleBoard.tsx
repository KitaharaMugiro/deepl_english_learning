import { useAtom } from "jotai"
import { ActiveWordleRow, WordleUserInput } from "../../models/jotai/Wordle"
import WordleRow from "./WordleRow"

interface Props {
    row1: string
    row2: string
    row3: string
    row4: string
    row5: string
    row6: string
    answer: string
}

export default (props: Props) => {
    const [userInput, setUserInput] = useAtom(WordleUserInput)
    const [activeRow] = useAtom(ActiveWordleRow)

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <WordleRow answer={props.answer} row={props.row1} userInput={activeRow === 0 ? userInput : null} />
        <WordleRow answer={props.answer} row={props.row2} userInput={activeRow === 1 ? userInput : null} />
        <WordleRow answer={props.answer} row={props.row3} userInput={activeRow === 2 ? userInput : null} />
        <WordleRow answer={props.answer} row={props.row4} userInput={activeRow === 3 ? userInput : null} />
        <WordleRow answer={props.answer} row={props.row5} userInput={activeRow === 4 ? userInput : null} />
        <WordleRow answer={props.answer} row={props.row6} userInput={activeRow === 5 ? userInput : null} />
    </div>

}