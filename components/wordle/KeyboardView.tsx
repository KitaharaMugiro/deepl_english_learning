import { useAtom } from "jotai";
import { useEffect } from "react";
import { WordleUserInput } from "../../models/jotai/Wordle";
import { useAddSkippedWordMutation } from "../../src/generated/graphql";
import { allMatcher } from "./AnswerMatcher";
import { WordleColors } from "./const";
import style from "./index.module.css";
import useWordleSubmit from "./useWordleSubmit";


interface Props {
    isYourTurn: boolean,
    slug: string,
    answer: string,
    rows: string[],
    opponentId: string,
    isEndGame: boolean
}

export default (props: Props) => {
    const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const thirdRow = ["z", "x", "c", "v", "b", "n", "m"]
    const [userInput, setUserInput] = useAtom(WordleUserInput)
    const { submit } = useWordleSubmit()

    const colors = allMatcher(props.rows, props.answer)

    const escFunction = (event: any) => {
        if (event.target.tagName?.toUpperCase() === "TEXTAREA") return
        if (event.target.tagName?.toUpperCase() === "INPUT") return

        if (event.keyCode === 13) {
            onClick("enter")
        } else if (event.keyCode === 8) {
            onClick("del")
        }
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            onClick(event.key)
        }
    }


    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [escFunction]);

    const onClick = async (char: string) => {
        if (props.isEndGame) return
        if (char === "enter") {
            if (!props.isYourTurn) return
            submit(userInput, () => setUserInput(""), props.slug, props.opponentId)
            return
        } else if (char === "del") {
            setUserInput(userInput.substring(0, userInput.length - 1))
        } else {
            if (userInput.length < 5) {
                setUserInput(userInput + char)
            }
        }
    }


    return <div className={style.keyboard}>
        <div className={style.keyboard_row}>
            {firstRow.map(c => <Key char={c} colorType={colors[c]} onClick={onClick} />)}
        </div>
        <div className={style.keyboard_row}>
            {secondRow.map(c => <Key char={c} colorType={colors[c]} onClick={onClick} />)}
        </div>
        <div className={style.keyboard_row}>
            <SpecialKey char="enter" colorType="none" onClick={onClick} />
            {thirdRow.map(c => <Key char={c} colorType={colors[c]} onClick={onClick} />)}
            <SpecialKey char="del" colorType="none" onClick={onClick} />
        </div>
    </div>
}

interface KeyProps {
    char: string
    colorType: "yellow" | "green" | "grey" | "none"
    onClick: (char: string) => void
}

const Key = (props: KeyProps) => {
    const backgroundColor = WordleColors[props.colorType]
    return <div className={style.key}
        onClick={() => props.onClick(props.char)}
        style={{
            backgroundColor: backgroundColor,
            color: props.colorType === "none" ? "black" : "white"

        }}>
        {props.char}
    </div>
}

const SpecialKey = (props: KeyProps) => {
    return <div className={style.key}
        onClick={() => props.onClick(props.char)}
        style={{
            backgroundColor: WordleColors["none"],
            color: "black",
            width: 60
        }}>
        {props.char}
    </div>
}
