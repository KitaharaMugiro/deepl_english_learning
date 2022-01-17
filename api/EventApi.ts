import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { DashboardListItem } from "../models/type/DashboardListItem";
import { EventItem } from "../models/type/EventItem";
import { StudyRecordDetail } from "../models/type/StudyRecordDetail";
import { ApiClient } from "./ApiClient";

export class EventApi {

    static async getEventList() {
        const client = new ApiClient()
        const res = await client.post(
            "/event/list",
            {
                userId: LocalStorageHelper.getUserId(),
            }
        )
        return res.data as Array<EventItem>
    }


    static async submitDoneEvent(eventId: string, eventValue: any) {
        const client = new ApiClient()
        const res = await client.post(
            "/event/submit",
            {
                userId: LocalStorageHelper.getUserId(),
                eventId: eventId,
                eventValue: eventValue
            }
        )
        return res.data as { firstTime: boolean }
    }
}