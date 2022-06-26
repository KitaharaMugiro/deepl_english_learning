import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export type ListTodayTopicResultResponse = {
    resultId: string,
    score: number,
    age: number,
    topicId: string,
    createdAt: string,
}[]


export type GetTodayTopicResponse = {
    question: {
        title: string
        todayTopicId: string
        topicId: string
        description: string
        titleEng: string
        descriptionEng: string
        categorySlug: string
    }
    answer: {
        japanese: string
        english: string
        translation: string
        age: number
        resultId: string
        name: string
        userId: string
    } | null
}

export class TodayApi {

    static async getTodayTopic() {
        const client = new ApiClient()
        const res = await client.post(
            "today/get_topic",
            {
                userId: LocalStorageHelper.getUserId()
            }
        )
        return res.data as GetTodayTopicResponse
    }

    static async getResult(resultId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "today/get_result",
            {
                resultId
            }
        )
        return res.data as GetTodayTopicResponse
    }

    static async submitTodayTopicResult(req: {
        todayTopicId: string,
        score: number,
        topicId: string,
        english: string,
        translation: string,
        age: number,
        japanese: string,
        name: string
    }) {
        const client = new ApiClient()
        const res = await client.post(
            "today/submit_result",
            {
                userId: LocalStorageHelper.getUserId(),
                ...req
            }
        )
        return res.data as { resultId: string }
    }

    static async listTodayTopicResult(userId?: string) {
        if (!userId) return []
        const client = new ApiClient()
        const res = await client.post(
            "today/list_result",
            {
                userId: userId
            }
        )
        return res.data as ListTodayTopicResultResponse
    }
}