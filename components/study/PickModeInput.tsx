import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { AtomTranslation } from "../../models/jotai/StudyJotai"
import NavigationDots from "../common/NavigationDots/NavigationDots"
import PickModeButton from "./PickModeButton"

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

    const onClick = (word: Word) => {
        const newShowingWords = showingWords.map(w => {
            if (w.id === word.id) {
                return { ...w, isSelected: !w.isSelected }
            }
            return w
        })
        setShowingWords(newShowingWords)

        props.addText(word.value)

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
            {showingWords.map((word) => (
                <PickModeButton
                    value={word.value}
                    isSelected={word.isSelected!}
                    onClick={() => onClick(word)}
                />
            ))}

            {complete ? <div /> : <NavigationDots max={allWordSet.length} index={index} />}
        </>
    )
}