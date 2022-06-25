import { useAtom } from "jotai"
import { FireGaEvent } from "../gtag"
import { IsOpenSignupActivationModalAtom } from "../jotai/SignupActivationModalJotai"
import useUser from "./useUser"

export default () => {
    const [isOpenSignupActicationModal, setOpen] = useAtom(IsOpenSignupActivationModalAtom)

    const openSignupActivationModal = () => {
        FireGaEvent({ action: "click", category: "signup", label: "modal open" })
        setOpen(true)
    }

    const closeSignupActivationModal = () => {
        FireGaEvent({ action: "click", category: "signup", label: "modal open" })
        setOpen(false)
    }

    return { openSignupActivationModal, isOpenSignupActicationModal, closeSignupActivationModal }
}