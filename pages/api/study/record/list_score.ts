import { NextApiRequest, NextApiResponse } from "next"

export interface Score {
    studySessionId: string
    score: number
    createdAt: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string } = req.body.data

    let resBody = [
        { studySessionId: "1", score: 70, createdAt: 1 },
        { studySessionId: "2", score: 98, createdAt: 4 },
        { studySessionId: "3", score: 80, createdAt: 2 },
    ]
    resBody.sort((a, b) => a.createdAt - b.createdAt)
    res.status(200).json(resBody)
}