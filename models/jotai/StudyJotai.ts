import { atom } from 'jotai'
import { Question, StudyRecord } from '../type/Question'

export const AtomActiveQuestion = atom<Question>({ topicId: "", title: "", description: "" })
export const AtomJapanse = atom("")
export const AtomEnglish = atom("")
export const AtomTranslation = atom("")
export const AtomQuestionNeedRetry = atom(false)
export const AtomAge = atom(0)

export const AtomName = atom(process.browser ? (localStorage.getItem("user_name") || "") : "")
export const AtomNameWithPersistence = atom(
    (get) => get(AtomName),
    (get, set, newStr) => {
        if (!process.browser) return;
        set(AtomName, newStr as string)
        localStorage.setItem('user_name', newStr as string)
    }
)