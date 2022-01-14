import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { DashboardListItem } from "../models/type/DashboardListItem";
import { StudyRecordDetail } from "../models/type/StudyRecordDetail";
import { ApiClient } from "./ApiClient";

export class RecordApi {

    static async getStudyRecordDetail(studySessionId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/detail",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId
            }
        )

        return res.data as StudyRecordDetail
    }

    static async getScoreList() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/list_score",
            {
                userId: LocalStorageHelper.getUserId(),
            }
        )
        return res.data as Array<{ studySessionId: string, score: number, createdAt: number }>
    }


    static async submitScore(score: number) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/submit_score",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId(),
                score: score
            }
        )
        return res.data
    }


    static async getDashboardList() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/list_dashboard",
            {
                userId: LocalStorageHelper.getUserId(),
            }
        )
        return res.data as DashboardListItem[]
    }

    static async submitDashboard(score: number, english: string, translation: string, topicId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/submit_dashboard",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId(),
                score: score,
                english: english,
                translation: translation,
                topicId: topicId,
                isOpen: false
            }
        )
        return res.data
    }
}