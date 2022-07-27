import { Button, Card, CardActions, CardContent, Input, Typography } from "@mui/material"
import { useState } from "react"
import { TokenApi } from "../../api/TokenApi"

interface Props {
    userId: string
    range: string
    token: number
    tokenRate: number
    price?: number
    createdAt: number
    status: string
    amazonGiftCode: string
}

export default (props: Props) => {
    const [code, setCode] = useState("")

    const createdAtString = new Date(props.createdAt).toLocaleString()
    const statusText = props.status === "Waiting" ? "発行待ち" : "発行済み"
    const calculatedPrice = Math.floor(props.token * props.tokenRate - 200)

    const handleSubmit = () => {
        if (!props.userId) {
            throw new Error("userId is required")
        }
        if (!props.range) {
            throw new Error("range is required")
        }
        if (!code) {
            throw new Error("code is required")
        }
        if (!calculatedPrice) {
            throw new Error("calculatedPrice is required")
        }
        TokenApi.setCode(props.userId, props.range, code, calculatedPrice).then(() => {
            window.location.reload()
        })
    }

    return <Card variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
                {props.token} トークン交換
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {createdAtString}
            </Typography>
            <Typography variant="body2">
                {statusText}
            </Typography>


            <Typography variant="body2">
                {props.token} × {props.tokenRate}円 - 手数料 = {calculatedPrice}円
            </Typography>

        </CardContent>
        <CardActions>
            <Input value={code} onChange={(e) => setCode(e.target.value)}></Input>
            <Button onClick={handleSubmit} size="small" >ギフトコードを登録する</Button>
        </CardActions>
    </Card>
}