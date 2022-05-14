import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export type Level = {
    level: number,
    levelExp: number,
    totalExp: number,
    needExp: number
}

export class LevelApi {

    static async getLevel() {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId) {
            throw Error("userId is not found")
        }
        const res = await client.post(
            "/level/getLevel",
            {
                userId,
            }
        )
        return res.data as Level
    }


    static async addExp(exp: number, studySessionId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/level/addExp",
            {
                userId: LocalStorageHelper.getUserId(),
                exp,
                studySessionId
            }
        )
        return res.data as { currentLevel: Level, prevLevel: Level }
    }
}