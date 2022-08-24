import { Auth } from "aws-amplify";
import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class SubscriptionApi {

    static async getCurrentPlan() {
        const client = new ApiClient()
        const token = await Auth.currentSession()
        if (!token) {
            throw Error("token is not found")
        }
        const res = await client.post(
            "/subscription/plan", {}
        )
        return res.data as { status: string, plan: string, customerId: string }
    }

    static async registerEternalPlan(pass: string) {
        const client = new ApiClient()
        const token = await Auth.currentSession()
        if (!token) {
            console.log("token is not found")
            throw Error("token is not found")
        }
        console.log("token")
        const res = await client.post(
            "/subscription/eternalPlan", {
            pass
        })
        return res.data as {}
    }


}