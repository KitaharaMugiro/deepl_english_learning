import { StudyApi } from "../../api/StudyApi"
import { LocalStorageHelper } from "../localstorage/LocalStorageHelper"

export default async () => {
    const studySessionId = LocalStorageHelper.getStudySessionId()
    if (!studySessionId) {
        const res = await StudyApi.studyStart()
        LocalStorageHelper.saveStudySessionId(res.studySessionId)
    }
}