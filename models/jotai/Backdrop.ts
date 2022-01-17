import { AlertColor } from "@mui/material";
import { atom } from "jotai";

export const BackdropAtom = atom<boolean>(false)
export const BackdropMessageAtom = atom("")

export const SnackbarAtom = atom<boolean>(false)
export const SnackbarMessageAtom = atom("")
export const SnackbarColorAtom = atom<AlertColor>("info")
export const SnackbarLinkAtom = atom<string>("")