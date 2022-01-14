import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class StudyApi {

    static async restudyStart(studySessionId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/restudy",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: studySessionId
            }
        )
        const { topicTitle, topicDescription, topicId, japanese } = res.data
        return { topicTitle, topicDescription, topicId, japanese }
    }

    static async studyStart(categorySlug?: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/start",
            { userId: LocalStorageHelper.getUserId(), categorySlug: categorySlug || "" }
        )
        const { studySessionId } = res.data
        return { studySessionId }
    }

    static async getTopic() {
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
        if (!userId || !studySessionId) throw Error("userIdもしくはstudySessionIdがありません")

        const client = new ApiClient()
        const res = await client.post(
            "/study/topic",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId()
            }
        )
        const { topicTitle, topicDescription, topicId } = res.data
        return { topicTitle, topicDescription, topicId }
    }

    static async sendJapanese(japanese: string) {
        const client = new ApiClient()
        const userId = LocalStorageHelper.getUserId()
        const studySessionId = LocalStorageHelper.getStudySessionId()
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
        const res = await client.post(
            "/study/english",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId(),
                english: english
            }
        )
        const { success, message } = res.data
        return { success, message }
    }

    static async translate(japanese: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/translation",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId(),
                japanese: japanese
            }
        )
        const { translation } = res.data
        return { translation }
    }

    static async leftHeart() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/left_heart",
            {
                userId: LocalStorageHelper.getUserId()
            }
        )
        const { leftHeart } = res.data
        return { leftHeart }
    }
}