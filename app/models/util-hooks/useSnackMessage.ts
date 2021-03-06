import { useAtom } from "jotai"
import { CenterSnackbarAtom, SnackbarAtom, SnackbarColorAtom, SnackbarLinkAtom, SnackbarMessageAtom } from "../jotai/Backdrop"

export const useSnackMessage = () => {
    const [open, setOpen] = useAtom(SnackbarAtom)
    const [centerOpen, setCenterOpen] = useAtom(CenterSnackbarAtom)
    const [__, setMessage] = useAtom(SnackbarMessageAtom)
    const [_, setColor] = useAtom(SnackbarColorAtom)
    const [___, setLink] = useAtom(SnackbarLinkAtom)

    const displayInfoMessage = (message: string, url?: string) => {
        setMessage(message)
        setColor("info")
        setLink(url || "")
        setOpen(true)
    }

    const displayErrorMessage = (message: string, url?: string) => {
        setMessage(message)
        setColor("error")
        setLink(url || "")
        setOpen(true)
    }

    const displaySuccessMessage = (message: string, url?: string) => {
        setMessage(message)
        setColor("success")
        setLink(url || "")
        setOpen(true)
    }

    const displayCenterWarningMessage = (message: string, url?: string) => {
        setMessage(message)
        setColor("warning")
        setLink(url || "")
        setCenterOpen(true)
    }

    return { displayInfoMessage, displayErrorMessage, displaySuccessMessage, displayCenterWarningMessage }
}