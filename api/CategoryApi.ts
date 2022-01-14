import { LocalStorageHelper } from "../models/localstorage/LocalStorageHelper"
import { Category } from "../models/type/Category"
import { StudyRecordDetail } from "../models/type/StudyRecordDetail"
import { ApiClient } from "./ApiClient"

export class CategoryApi {

    static async getCategoryDetail(categorySlug: string) {
        const client = new ApiClient()
        const res = await client.post(
            "/category/detail",
            {
                userId: LocalStorageHelper.getUserId(),
                categorySlug: categorySlug
            }
        )

        return res.data as Category
    }

    static async getCategoryList() {
        const client = new ApiClient()
        const res = await client.post(
            "/category/list",
            {}
        )

        return res.data as {
            "new": Category[],
            "popular": Category[],
            "free": Category[]
        }
    }
}