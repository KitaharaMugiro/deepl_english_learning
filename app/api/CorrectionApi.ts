import { ApiClient } from "./ApiClient";

export class CorrectionApi {

    static async correction(userEnglish: string, more?: string) {
        const client = new ApiClient()
        if (!userEnglish) console.error("userEnglishがありません") //ローカルではエラーにする
        const res = await client.post(
            "/correction/english",
            {
                userEnglish,
                more
            }
        )
        const { answer } = res.data
        return { answer }
    }

    static async correctionWithJapanse(userEnglish: string, japanese: string) {
        const client = new ApiClient()
        if (!userEnglish) console.error("userEnglishがありません") //ローカルではエラーにする
        const res = await client.post(
            "/correction/english_with_japanese",
            {
                userEnglish,
                japanese
            }
        )
        const { answer } = res.data
        return { answer }
    }

}