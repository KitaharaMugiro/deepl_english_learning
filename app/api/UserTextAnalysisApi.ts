import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export type AnalysisResponse = {
    userText: string;
    analysisQuestion: string;
    analysisAnswer: string;
}[]

export class UserTextAnalysisApi {

    static async requestAnalysis() {
        const client = new ApiClient()
        const res = await client.post(
            "/analysis/request_analysis",
            { userId: LocalStorageHelper.getUserId() }
        )
        const { message } = res.data as { message: string }
        return { message }
    }

    static async getAnalysis() {
        const client = new ApiClient()
        const res = await client.post(
            "/analysis/get_analysis",
            { userId: LocalStorageHelper.getUserId() }
        )
        const { analysisList } = res.data as {
            analysisList: AnalysisResponse
        }
        return analysisList
    }
}