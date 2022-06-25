import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class StudyApi {

    //TODO: console.errorで凌いでるけどこれいいの？
    static async restudyStart(studySessionId: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません") //ローカルではエラーにする
        const res = await client.post(
            "/study/restudy",
            {
                userId,
                studySessionId
            }
        )
        const { topicTitle, topicDescription, topicId, japanese } = res.data
        return { topicTitle, topicDescription, topicId, japanese }
    }

    static async studyStart(categorySlug?: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId) console.error("userIdがありません")
        const res = await client.post(
            "/study/start",
            { userId, categorySlug: categorySlug || "" }
        )
        const { studySessionId } = res.data

        LocalStorageHelper.saveStudySessionId(studySessionId)
        return { studySessionId }
    }

    static async getTopic() {
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません")
        const client = new ApiClient()
        const res = await client.post(
            "/study/topic",
            {
                userId: userId,
                studySessionId: studySessionId
            }
        )
        const { topicTitle, topicDescription, topicId } = res.data
        return { topicTitle, topicDescription, topicId }
    }

    static async sendJapanese(japanese: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません")

        const res = await client.post(
            "/study/japanese",
            {
                userId,
                studySessionId,
                japanese: japanese
            }
        )
        const { success, message } = res.data
        return { success, message }
    }

    static async sendEnglish(english: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません")

        const res = await client.post(
            "/study/english",
            {
                userId,
                studySessionId,
                english
            }
        )
        const { success, message } = res.data
        return { success, message }
    }

    static async translate(japanese: string, contextualText: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません")

        const res = await client.post(
            "/study/translation",
            {
                userId,
                studySessionId,
                japanese,
                contextualText
            }
        )
        const { translation } = res.data
        return { translation }
    }

    static async sendResult(score: number, topicId: string, english: string, translation: string, japanese: string, age: number) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) console.error("userIdもしくはstudySessionIdがありません")

        const res = await client.post(
            "/study/send_result",
            {
                userId,
                studySessionId,
                score,
                topicId,
                english,
                translation,
                japanese,
                age
            }
        )
        const { resultId } = res.data as { resultId: string }
        return { resultId }
    }

    static async getResult(resultId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/get_result",
            {
                resultId
            }
        )
        return res.data as GetStudyResultResponse
    }

    static async leftHeart() {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId) console.error("userIdがありません")

        const res = await client.post(
            "/study/left_heart",
            {
                userId
            }
        )
        const { leftHeart } = res.data
        return { leftHeart }
    }

    static async compare(english: string, translation: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        if (!userId) console.error("userIdがありません")

        const res = await client.post(
            "/study/compare",
            {
                userId,
                english,
                translation
            }
        )
        const { userShouldRememberThisWords } = res.data as {
            userShouldRememberThisWords: {
                headword: string,
                meaning: string,
                pos: string,
                level: string
            }[]
        }
        return { userShouldRememberThisWords }
    }
}

export type GetStudyResultResponse = {
    question: {
        title: string
        topicId: string
        description: string
        categorySlug: string
    }
    answer: {
        japanese: string
        english: string
        translation: string
        age: number
        resultId: string
        userId: string
    } | null
}
