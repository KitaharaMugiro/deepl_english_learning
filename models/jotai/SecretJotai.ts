import { atom } from 'jotai'
import { PachiFilter } from '../type/Secrets'

export const AtomOpenFilter = atom(false)
export const AtomActiveFilter = atom<PachiFilter | null>(null)
export const AtomFilterList = atom<PachiFilter | null[]>([null, null, null])