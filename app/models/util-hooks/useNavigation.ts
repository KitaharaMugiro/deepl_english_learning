import { useRouter } from "next/router"
import useUser from "./useUser"

export default () => {
    const router = useRouter()
    const { user } = useUser()

    const goHome = () => {
        if (user) {
            router.push("/dashboard")
        } else {
            router.push("/")
        }
    }

    return { goHome }
}