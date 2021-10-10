import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string, japanese: string } = req.body.data
    const japanese = reqBody.japanese
    console.log(`${reqBody.studySessionId} = ${japanese}`)
    let resBody = { success: true, message: "" }
    if (japanese.length < 10) {
        resBody = { success: false, message: "意見が短すぎるのでもう少し書きましょう" }
    }
    if (japanese.length > 600) {
        resBody = { success: false, message: "意見が長すぎるので1分程度で書ける分量にしましょう" }
    }
    res.status(200).json(resBody)
}