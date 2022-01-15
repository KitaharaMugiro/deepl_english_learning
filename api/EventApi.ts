import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { DashboardListItem } from "../models/type/DashboardListItem";
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
        return res.data as Array<{
            eventId: string,
            eventTitle: string,
            eventDescription: string,
            importance: number,
            isActive: boolean,
            done: boolean
        }>
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
        return res.data
    }
}