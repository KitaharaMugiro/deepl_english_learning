import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import { FireGaEvent } from "../gtag"
import { IsOpenSigninModalAtom, PreviousUrlAtom } from "../jotai/PreviousUrl"

export default () => {
    const [isOpen, setOpen] = useAtom(IsOpenSigninModalAtom)
    const [url, setUrl] = useAtom(PreviousUrlAtom)
    const router = useRouter()

    const openSignin = () => {
        setUrl(router.asPath)
        FireGaEvent({ action: "click", category: "signin", label: "modal open" })
        setOpen(true)
    }

    const closeSignin = () => {
        setUrl(router.asPath)
        FireGaEvent({ action: "click", category: "signin", label: "modal close" })
        setOpen(false)
    }

    return { url, isOpen, openSignin, closeSignin }
}