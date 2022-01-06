import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import { IsOpenSigninModalAtom, PreviousUrlAtom } from "../jotai/PreviousUrl"

export default () => {
    const [isOpen, setOpen] = useAtom(IsOpenSigninModalAtom)
    const [url, setUrl] = useAtom(PreviousUrlAtom)
    const router = useRouter()

    const goSignin = () => {
        setUrl(router.asPath)
        router.push("/signin")
    }

    const openSignin = () => {
        setOpen(true)
    }

    const closeSignin = () => {
        setOpen(false)
    }

    return { url, goSignin, isOpen, openSignin, closeSignin }
}