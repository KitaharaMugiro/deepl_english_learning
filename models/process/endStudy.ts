import { TopicApi } from "../../api/TopicApi"
import { LocalStorageHelper } from "../localstorage/LocalStorageHelper"

export default async (topicId: string) => {
    await TopicApi.submitDoneTopics(topicId)
    LocalStorageHelper.clearStudySessionId()
}