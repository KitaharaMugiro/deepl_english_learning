import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class RankingApi {

    static async getWeeklyRanking() {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId) {
            throw new Error("userId is not found")
        }
        const res = await client.post(
            "weeklyRanking/",
            {
                userId
            }
        )

        return res.data as {
            userRank: number,
            ranking: {
                userId: string,
                totalExp: number,
                reward: number
            }[],
        }
    }
}