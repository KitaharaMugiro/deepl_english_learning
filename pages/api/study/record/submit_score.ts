import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string, score: number } = req.body.data
    console.log(`${reqBody.studySessionId} score`)
    let resBody = { success: true, message: "" }
    res.status(200).json(resBody)
}