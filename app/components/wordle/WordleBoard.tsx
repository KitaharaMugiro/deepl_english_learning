import { useAtom } from "jotai"
import { ActiveWordleRow, WordleSuggest, WordleUserInput } from "../../models/jotai/Wordle"
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
    const [userInput] = useAtom(WordleUserInput)
    const [suggest] = useAtom(WordleSuggest)
    const [activeRow] = useAtom(ActiveWordleRow)

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <WordleRow answer={props.answer}
            row={props.row1}
            userInput={activeRow === 0 ? userInput : null}
            suggest={activeRow === 0 ? suggest : null}
        />
        <WordleRow answer={props.answer} row={props.row2}
            userInput={activeRow === 1 ? userInput : null}
            suggest={activeRow === 1 ? suggest : null} />
        <WordleRow answer={props.answer} row={props.row3}
            userInput={activeRow === 2 ? userInput : null}
            suggest={activeRow === 2 ? suggest : null} />
        <WordleRow answer={props.answer} row={props.row4}
            userInput={activeRow === 3 ? userInput : null}
            suggest={activeRow === 3 ? suggest : null} />
        <WordleRow answer={props.answer} row={props.row5}
            userInput={activeRow === 4 ? userInput : null}
            suggest={activeRow === 4 ? suggest : null}
        />
        <WordleRow answer={props.answer} row={props.row6}
            userInput={activeRow === 5 ? userInput : null}
            suggest={activeRow === 5 ? suggest : null} />
    </div>

}