import { ApiClient } from "./ApiClient";

export class DiaryApi {

    static async translateDiary(userInputText: string, addContextualSentence: boolean) {
        const client = new ApiClient()
        if (!userInputText) console.error("userInputTextがありません") //ローカルではエラーにする
        const res = await client.post(
            "/diary/translate",
            {
                userInputText,
                addContextualSentence
            }
        )
        console.log("translateDiary", res)
        const { translatedEnglish, translatedJapanese, detectedSourceLanguage } = res.data
        return { translatedEnglish, translatedJapanese, detectedSourceLanguage }
    }

}