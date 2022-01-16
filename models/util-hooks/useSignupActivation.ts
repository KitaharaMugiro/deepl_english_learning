import { useAtom } from "jotai"
import { IsOpenSignupActivationModalAtom } from "../jotai/SignupActivationModalJotai"
import useUser from "./useUser"

export default () => {
    const [isOpenSignupActicationModal, setOpen] = useAtom(IsOpenSignupActivationModalAtom)

    const openSignupActivationModal = () => {
        setOpen(true)
    }

    const closeSignupActivationModal = () => {
        setOpen(false)
    }

    return { openSignupActivationModal, isOpenSignupActicationModal, closeSignupActivationModal }
}