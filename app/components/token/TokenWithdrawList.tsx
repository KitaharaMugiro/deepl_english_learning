import { Card, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { TokenApi, WithdrawRequest } from "../../api/TokenApi"
import TokenRequestCard from "./TokenRequestCard"

export default () => {
    const [requests, setRequests] = useState<WithdrawRequest[]>([])

    useEffect(() => {
        TokenApi.listMyWithdrawRequest().then(res => {
            const requests = res.requests
            setRequests(requests)
        })
    }, [])

    return <div>
        {requests.sort((a, b) => b.createdAt - a.createdAt).map(request => {
            return <div style={{ marginBottom: 10 }}>
                <TokenRequestCard
                    userId={request.userId}
                    token={request.token}
                    tokenRate={request.tokenRate}
                    price={request.price}
                    address={request.address}
                    createdAt={request.createdAt}
                    status={request.status}
                    amazonGiftCode={request.amazonGiftCode}
                />
            </div>
        })}
    </div>
}