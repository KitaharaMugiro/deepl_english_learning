import { atom, useAtom } from "jotai"
import { UserAtom } from "../jotai/User"

const LoadingAtom = atom(false)
export default () => {
    const [loadingUser, setLoadingUser] = useAtom(LoadingAtom)
    const [user, setUser] = useAtom(UserAtom)
    return { user, setUser, loadingUser, setLoadingUser }
}