import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper"
import { ApiClient } from "./ApiClient"

export type WithdrawRequest = {
    hash: string
    range: string
    token: number
    tokenRate: number
    price: number
    address: string
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
        return res.data as { token: number, tokenRateJpy: number, tokenRateMatic: number, createdAt: number }
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


    static async requestWithdraw(address: string) {
        const client = new ApiClient()
        const res = await client.post(
            "token/request",
            { address }
        )
        return res.data as {}
    }

    static async setCode(requestUserId: string, range: string, engToken: number) {
        const client = new ApiClient()
        const res = await client.post(
            "token/set-code",
            { requestUserId, range, engToken }
        )
        return res.data as {}
    }

    static async setTokenRate(tokenRateJpy: number, tokenRateMatic: number) {
        const client = new ApiClient()
        const res = await client.post(
            "token/set-token-rate",
            { tokenRateJpy, tokenRateMatic }
        )
        return res.data as {}
    }
}