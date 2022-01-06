import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"

const KEY = "XXXX"
const url = "XXXX"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string, japanese: string } = req.body.data
    console.log(`${reqBody.userId} ${reqBody.studySessionId}が翻訳しました`)

    const params = {
        "auth_key": KEY,
        "text": reqBody.japanese,
        "target_lang": "EN"
    }

    const response = await axios.get(url, { params })
    const result = response.data.translations[0].text
    res.status(200).json({ translation: result })
}