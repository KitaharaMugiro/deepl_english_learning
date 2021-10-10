import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClientSecret } from "./ApiClientSecret";

export interface RankingTableItem {
    storeName: string
    actualCount: number
    daimei: string
    daiban: string
    updateAt: string
    leftCount: number
    daiType: string
    history: { date: string, finalStart: number, ooatari: number }[]
}


export class SecretApi {
    static async loginByUserId(userId: string) {
        try {
            const client = new ApiClientSecret()
            const res = await client.post(
                "/login",
                { userId }
            )
            const foundUser = res.data
            console.log({ foundUser })
            return {
                userId: foundUser.userId,
                storeList: foundUser.storeList
            }
        } catch {
            return null
        }
    }

    static async login(username: string, password: string) {
        const client = new ApiClientSecret()
        const res = await client.post(
            "/login",
            { username, password }
        )
        const foundUser = res.data
        console.log({ foundUser })
        return {
            userId: foundUser.userId,
            storeList: foundUser.storeList
        }
    }

    static async getRankingTable() {
        const client = new ApiClientSecret()
        const res = await client.get(
            "/ranking",
            {}
        )
        const { completeTables } = res.data as { completeTables: RankingTableItem[] }
        completeTables.forEach((c) => {
            const tenjo = c.actualCount + c.leftCount
            if (tenjo < 450) {
                c.daiType = "甘デジ"
            } else if (tenjo < 900) {
                c.daiType = "ライトミドルスペック"
            } else {
                c.daiType = "ミドルスペック"
            }
        })
        return completeTables
    }
}