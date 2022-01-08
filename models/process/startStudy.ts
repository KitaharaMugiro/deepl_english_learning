import { StudyApi } from "../../api/StudyApi"
import { LocalStorageHelper } from "../localstorage/LocalStorageHelper"

export default async (categorySlug: string) => {
    const res = await StudyApi.studyStart(categorySlug)
    LocalStorageHelper.saveStudySessionId(res.studySessionId)
}