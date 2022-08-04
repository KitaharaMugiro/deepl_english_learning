import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { AtomTranslation } from "../../models/jotai/StudyJotai"
import NavigationDots from "../common/NavigationDots/NavigationDots"
import PickModeButton from "./PickModeButton"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material"
interface Props {
    addText: (text: string) => void
}

type Word = {
    value: string,
    id: number,
    isSelected?: boolean
}

export default (props: Props) => {
    const DISPLAY_LIMIT = 7
    const [index, setIndex] = useState(0)
    const [allWordSet, setAllWordSet] = useState<Word[][]>([])
    const [showingWords, setShowingWords] = useState<Word[]>([])
    const [complete, setComplete] = useState(false)
    const [translation] = useAtom(AtomTranslation)

    useEffect(() => {
        if (translation.length === 0) return
        //翻訳した文書をスペースで分割する
        const words = translation.split(" ")

        //DISPLAY_LIMIT個ずつに分ける
        const wordSet = []
        for (let i = 0; i < words.length; i += DISPLAY_LIMIT) {
            wordSet.push(words.slice(i, i + DISPLAY_LIMIT))
        }
        const _wordSet = wordSet.map(word => word.map(w => ({ value: w, id: Math.random() })))
        setAllWordSet(_wordSet)

    }, [translation])

    useEffect(() => {
        //showingWordsが空であれば、allWordSetの最初の要素をshowingWordsに設定する
        if (showingWords.length === 0 && allWordSet.length > 0) {
            const nextWords = allWordSet[index]
            nextWords.sort(() => Math.random() - 0.5)
            setShowingWords(nextWords)
        }
    }, [allWordSet])

    const onClick = (word: Word, addWordToTextField: boolean = true) => {
        const newShowingWords = showingWords.map(w => {
            if (w.id === word.id) {
                return { ...w, isSelected: !w.isSelected }
            }
            return w
        })
        setShowingWords(newShowingWords)

        if (addWordToTextField) {
            props.addText(word.value)
        }


        //もし全ての文字が選択されていたら、次の文字を表示する(同じものは出さない)
        if (newShowingWords.filter(w => w.isSelected).length === newShowingWords.length) {
            if (index !== allWordSet.length - 1) {
                const nextWords = allWordSet[index + 1]
                nextWords.sort(() => Math.random() - 0.5)
                setShowingWords(nextWords)
                setIndex(index + 1)
            } else {
                setShowingWords([])
                setComplete(true)
            }
        }
    }


    return (
        <>
            <div style={{ display: "flex", marginBottom: 20, flexWrap: "wrap" }}>
                {showingWords.map((word) => (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <IconButton
                            size="small"
                            onClick={() => onClick(word, false)}
                            color="inherit"
                            style={{ margin: "auto", visibility: word.isSelected ? "hidden" : "visible" }}
                        >
                            <ClearIcon fontSize="small" /></IconButton>
                        <PickModeButton
                            value={word.value}
                            isSelected={word.isSelected!}
                            onClick={() => onClick(word)}
                        />
                    </div>
                ))}
            </div>
            {complete ? <div /> : <NavigationDots max={allWordSet.length} index={index} />}
        </>
    )
}