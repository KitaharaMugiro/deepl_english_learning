import { useEffect, useState } from "react"
import { ApiClient } from "../../api/ApiClient"
import { TokenApi } from "../../api/TokenApi"

export default () => {
    const [token, setToken] = useState(0)
    const [tokenRate, setTokenRate] = useState(0)
    const [createdAt, setCreatedAt] = useState(0)
    useEffect(() => {
        const getToken = async () => {
            const res = await TokenApi.getToken()
            setToken(res.token)
            setTokenRate(res.tokenRate)
            setCreatedAt(res.createdAt)
        }

        getToken()
    }, [])

    return { token, tokenRate, createdAt }
}