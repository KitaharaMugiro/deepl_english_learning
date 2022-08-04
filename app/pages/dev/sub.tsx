import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"
import useUser from "../../models/util-hooks/useUser"

export default () => {
    const { user } = useUser()
    return (
        <div style={{ marginTop: 100 }}>
            <h1>{user?.attributes.sub || "ログインしてください"}</h1>
        </div>
    )
}