import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string } = req.body.data
    console.log(`${reqBody.studySessionId} の勉強記録を取得`)

    const resBody = {
        studySessionId: reqBody.studySessionId,
        japaneseHistory: [
            { english: "worth english", createdAt: "2020/02/02 13:00:00" },
            { english: "better english", createdAt: "2020/02/02 15:00:00" }]
        ,
        englishHistory: [
            { english: "worth english", createdAt: "2020/02/02 13:00:00" },
            { english: "better english", createdAt: "2020/02/02 15:00:00" }]
    }
    res.status(200).json(resBody)
}