import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"
import useUser from "../../models/util-hooks/useUser"

export default () => {
    const [displayText, setDisplayText] = useState("読み込み中")

    const getJwtToken = async () => {
        try {
            const token = await Auth.currentSession()
            setDisplayText(token.getIdToken().getJwtToken())
        } catch (e) {
            setDisplayText("ログインしてください")
        }
    }

    useEffect(() => {
        getJwtToken()

    }, [])

    return (
        <div style={{ marginTop: 100 }}>
            <h1>{displayText}</h1>
        </div>
    )
}