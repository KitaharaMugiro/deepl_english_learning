import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class StripeApi {

    static async createSession(priceId: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/stripe/create_session",
            { priceId: priceId }
        )
        const { redirectUrl } = res.data
        return { redirectUrl }
    }

    static async getPortalUrl() {
        const client = new ApiClient()
        const res = await client.post(
            "/stripe/portal", {}
        )
        return res.data as { redirectUrl: string }
    }
}