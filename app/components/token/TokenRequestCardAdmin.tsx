import { Button, Card, CardActions, CardContent, Input, Typography } from "@mui/material"
import { useState } from "react"
import { TokenApi } from "../../api/TokenApi"

interface Props {
    userId: string
    range: string
    token: number
    tokenRate: number
    address: string
    price?: number
    createdAt: number
    status: string
    amazonGiftCode: string
}

export default (props: Props) => {
    const createdAtString = new Date(props.createdAt).toLocaleString()
    const COMMISION = 100
    const MATIC_COMMISION = 100
    const ENG_TOKEN = props.token - COMMISION - MATIC_COMMISION


    const handleSubmit = () => {
        if (!props.userId) {
            throw new Error("userId is required")
        }
        if (!props.range) {
            throw new Error("range is required")
        }
        if (!ENG_TOKEN) {
            throw new Error("ENG_TOKEN is required")
        }
        TokenApi.setCode(props.userId, props.range, ENG_TOKEN).then(() => {
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
                ユーザID: (DashBoard#{props.userId})
            </Typography>
            <br />

            <Typography variant="body2">
                ウォレットアドレス = {props.address}
            </Typography>
            <Typography variant="body2">
                ENGトークン = {props.token - 200} ENG
            </Typography>
            <Typography variant="body2">
                MATICトークン = {100} ENG
            </Typography>
            <Typography variant="body2">
                手数料 = {100} ENG
            </Typography>


        </CardContent>
        <CardActions>
            <Button onClick={handleSubmit} size="small" >送付済み</Button>
        </CardActions>
    </Card>
}