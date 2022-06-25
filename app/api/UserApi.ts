import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper";
import { ApiClient } from "./ApiClient";

export class UserApi {

    static async signin() {
        const client = new ApiClient()
        const res = await client.post(
            "/user/signin",
            { userId: LocalStorageHelper.getUserId() }
        )
        const { result, userId } = res.data
        return { result, userId }
    }
}