import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class TopicApi {

    static async getAllTopicId(categorySlug?: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/topic/all",
            {
                categorySlug: categorySlug || ""
            }
        )
        return res.data as string[]
    }

    static async getDoneTopicIds(categorySlug?: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/topic/done_topic",
            {
                userId: LocalStorageHelper.getUserId(),
                categorySlug: categorySlug || ""
            }
        )
        return res.data as string[]
    }

    static async submitDoneTopics(topicId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/study/topic/submit_done_topic",
            {
                userId: LocalStorageHelper.getUserId(),
                topicId
            }
        )
        return res.data
    }


}