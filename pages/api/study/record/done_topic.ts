import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string } = req.body.data
    console.log(`${reqBody.userId} の終了したtopicを取得する`)
    let resBody = [
        { topicId: "1" },
        { topicId: "2" },
    ]
    res.status(200).json(resBody)
}