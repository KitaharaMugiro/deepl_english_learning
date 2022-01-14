import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class SubscriptionApi {

    static async getCurrentPlan() {
        const client = new ApiClient()
        const res = await client.post(
            "/subscription/plan", {}
        )
        return res.data as { status: string, plan: string, customerId: string }
    }



}