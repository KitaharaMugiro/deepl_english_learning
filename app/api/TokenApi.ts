import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper"
import { ApiClient } from "./ApiClient"

export type WithdrawRequest = {
    hash: string
    range: string
    token: number
    tokenRate: number
    price: number
    userId: string
    createdAt: number
    status: string
    amazonGiftCode: string
}

export class TokenApi {

    static async getToken() {
        const client = new ApiClient()
        const res = await client.post(
            "token/token",
            {
                userId: LocalStorageHelper.getUserId()
            }
        )
        return res.data as { token: number, tokenRate: number, createdAt: number }
    }

    static async listWaitingWithdrawRequest() {
        const client = new ApiClient()
        const res = await client.post(
            "token/waiting",
            {}
        )
        return res.data as {
            requests: WithdrawRequest[],
            tokenRate: number, createdAt: number
        }
    }

    static async listMyWithdrawRequest() {
        const client = new ApiClient()
        const res = await client.post(
            "token/my-requests",
            {}
        )
        return res.data as {
            requests: WithdrawRequest[]
        }
    }


    static async requestWithdraw() {
        const client = new ApiClient()
        const res = await client.post(
            "token/request",
            {}
        )
        return res.data as {}
    }

    static async setCode(requestUserId: string, range: string, amazonGiftCode: string, price: number) {
        const client = new ApiClient()
        const res = await client.post(
            "token/set-code",
            { requestUserId, range, amazonGiftCode, price }
        )
        return res.data as {}
    }

    static async setTokenRate(tokenRate: number) {
        const client = new ApiClient()
        const res = await client.post(
            "token/set-token-rate",
            { tokenRate }
        )
        return res.data as {}
    }
}