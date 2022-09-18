import { Button, Card, Input, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { TokenApi, WithdrawRequest } from "../../api/TokenApi"
import Seo from "../../components/common/Seo"
import TokenRequestCard from "../../components/token/TokenRequestCard"
import TokenRequestCardAdmin from "../../components/token/TokenRequestCardAdmin"
import useToken from "../../models/util-hooks/useToken"
import useUser from "../../models/util-hooks/useUser"

export default () => {
    const { user } = useUser()
    const subs = ["45b76d16-ff9e-4190-acf6-240faae444fd"]

    const { tokenRateJpy, tokenRateMatic, createdAt } = useToken()
    const [inputTokenRate, setInputTokenRate] = useState<string | undefined>(undefined)
    const [inputTokenRateMatic, setInputTokenRateMatic] = useState<string | undefined>(undefined)
    const [requests, setRequests] = useState<WithdrawRequest[]>([])

    const createdAtString = new Date(createdAt).toLocaleString()
    useEffect(() => {
        TokenApi.listWaitingWithdrawRequest().then(res => {
            const requests = res.requests
            setRequests(requests)
        })

    }, [])

    const onSetTokenRate = () => {
        TokenApi.setTokenRate(
            Number(inputTokenRate),
            Number(inputTokenRateMatic),
        ).then(res => {
            window.location.reload()
        })
    }

    const renderWithdrawRequest = () => {
        if (requests.length === 0) {
            return <Typography variant="h1">
                出金申請はありません。
            </Typography>
        }

        return requests.sort((a, b) => b.createdAt - a.createdAt).map(request => {
            return <div style={{ marginBottom: 10 }}>
                <TokenRequestCardAdmin
                    userId={request.userId}
                    token={request.token}
                    tokenRate={tokenRateJpy}
                    createdAt={request.createdAt}
                    address={request.address}
                    status={request.status}
                    amazonGiftCode={request.amazonGiftCode}
                    range={request.range}
                />
            </div>
        })
    }

    if (!subs.includes(user?.attributes.sub || "")) {
        return <div></div>
    }

    return <>
        <Seo
            ogpInfo={{
                title: "管理画面",
                pagePath: "/token/admin",
            }}
        />
        <a href="https://www.notion.so/2d804d4150554f81bebac62a3ec555a8"></a>
        <Card style={{ padding: 20, flexGrow: 1 }}>
            <Typography variant="body1">
                トークン価値 ({createdAtString}更新)
            </Typography>
            <Input value={inputTokenRate === undefined ? tokenRateJpy : inputTokenRate} onChange={(e) => { setInputTokenRate(e.target.value) }}></Input> 円 / トークン
            <br />
            <Input value={inputTokenRateMatic === undefined ? tokenRateMatic : inputTokenRateMatic} onChange={(e) => { setInputTokenRateMatic(e.target.value) }}></Input> Matic / トークン
            <br />
            <Button onClick={onSetTokenRate}>トークン価値を更新</Button>
        </Card>

        {renderWithdrawRequest()}
    </>;
}