import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { StudyRecordDetail } from "../models/type/StudyRecordDetail";
import { Score } from "../pages/api/study/record/list_score";
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
        return res.data as Array<Score>
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

    static async getDoneTopics() {
        const client = new ApiClient()
        const res = await client.post(
            "/study/record/done_topic",
            {
                userId: LocalStorageHelper.getUserId()
            }
        )
        return res.data
    }
}