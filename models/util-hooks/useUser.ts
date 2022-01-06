import { atom, useAtom } from "jotai"
import { useEffect, useState } from "react"
import { UserAtom } from "../jotai/User"
import { v4 as uuidv4 } from "uuid"

const LoadingAtom = atom(false)
export default () => {
    const [loadingUser, setLoadingUser] = useAtom(LoadingAtom)
    const [user, setUser] = useAtom(UserAtom)
    const [tempUserId, setTempUserId] = useState("")
    useEffect(() => {
        if (process.browser) {
            if (localStorage.getItem("USER_ID")) {
                setTempUserId(localStorage.getItem("USER_ID") as string)
            } else {
                localStorage.setItem("USER_ID", uuidv4())
                setTempUserId(localStorage.getItem("USER_ID") as string)
            }
        }
    }, [process.browser])
    return { user, setUser, tempUserId, loadingUser, setLoadingUser }
}