import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { StudyRecordDetail } from "../models/type/StudyRecordDetail";
import { Score } from "../pages/api/study/record/list_score";
import { ApiClient } from "./ApiClient";

export class StudyApi {

    static async studyStart() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/start",
            { userId: LocalStorageHelper.getUserId() }
        )
        const { studySessionId, startTime } = res.data
        return { studySessionId, startTime }
    }

    static async getTopic() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/topic",
            { userId: LocalStorageHelper.getUserId(), studySessionId: LocalStorageHelper.getStudySessionId() }
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

}