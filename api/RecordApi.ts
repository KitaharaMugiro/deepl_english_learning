import WriteJapanese from "../components/study/WriteJapanese";
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
        return res.data as Array<{ studySessionId: string, score: number, age: number, createdAt: number }>
    }


    static async submitScore(score: number, age: number) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/submit_score",
            {
                userId: LocalStorageHelper.getUserId(),
                studySessionId: LocalStorageHelper.getStudySessionId(),
                score: score,
                age: age
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

    static async submitDashboard(score: number, english: string, translation: string, topicId: string, japanese: string, age: number) {
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
                japanese: japanese,
                age: age,
                isOpen: false
            }
        )
        return res.data
    }
}