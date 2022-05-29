import { atom } from "jotai";

export const WeeklyRankingAtom = atom<{ userId: string, totalExp: number }[]>([])
export const UserRankAtom = atom(0)