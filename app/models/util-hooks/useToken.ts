import { useEffect, useState } from "react"
import { ApiClient } from "../../api/ApiClient"
import { TokenApi } from "../../api/TokenApi"

export default () => {
    const [token, setToken] = useState(0)
    const [tokenRateYen, setTokenRateYen] = useState(0)
    const [tokenRateMatic, setTokenRateMatic] = useState(0)
    const [createdAt, setCreatedAt] = useState(0)
    useEffect(() => {
        const getToken = async () => {
            const res = await TokenApi.getToken()
            setToken(res.token)
            setTokenRateYen(res.tokenRate)
            setCreatedAt(res.createdAt)
        }

        getToken()
    }, [])

    return { token, tokenRateYen, tokenRateMatic, createdAt }
}