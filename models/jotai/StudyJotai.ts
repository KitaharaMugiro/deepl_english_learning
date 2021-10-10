import { atom } from 'jotai'
import { Question, StudyRecord } from '../type/Question'

export const AtomActiveQuestion = atom<Question>({ title: "", description: "" })
export const AtomJapanse = atom("")
export const AtomEnglish = atom("")
export const AtomTranslation = atom("I agree with his ideas that the reason why programming is taught in schools is because software is getting important in our society. We should think about how to teach them so that they will be able to deal with software in the future.")
export const AtomQuestionNeedRetry = atom(false)