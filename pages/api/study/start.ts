import { NextApiRequest, NextApiResponse } from "next"
import { topics } from "./topic";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string } = req.body.data
    console.log(`${reqBody.userId} が勉強を開始しました`)
    const topicId = Math.floor(Math.random() * topics.length); //使わないけどここでtopicIdを確定させる
    const studySessionId = "test_session"
    const resBody = { studySessionId, topicId, startTime: "2021/03/21 22:22:22" }
    res.status(200).json(resBody)
}