import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string, english: string } = req.body.data
    const english = reqBody.english
    console.log(`${reqBody.studySessionId} = ${english}`)
    let resBody = { success: true, message: "" }
    if (english.length < 10) {
        resBody = { success: false, message: "英語が短すぎるのでもう少し書きましょう" }
    }
    if (english.length > 600) {
        resBody = { success: false, message: "英語が長すぎるので2分程度で書ける分量にしましょう" }
    }
    res.status(200).json(resBody)
}