import { useAtom } from "jotai";
import { IsOpenPhraseModalAtom } from "../jotai/PhraseModalJotai";

export default () => {
    const [open, setOpen] = useAtom(IsOpenPhraseModalAtom);

    const openPhraseList = () => {
        setOpen(true)
    }
    const closePhraseList = () => {
        setOpen(false)
    }
    return { open, openPhraseList, closePhraseList }
}