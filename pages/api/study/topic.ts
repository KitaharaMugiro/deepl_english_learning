import { NextApiRequest, NextApiResponse } from "next"

export const topics = [
    {
        "topicId": 1,
        "topicTitle": "転売＝悪？",
        "topicDescription": "限定グッズやコンサートチケット、マスクなどの転売について「転売ヤー」などと揶揄し、憤慨するツイートをしばしば見かけます。転売は悪なのでしょうか？",
    },
    {
        "topicId": 2,
        "topicTitle": "サウナは本当に健康に良い？",
        "topicDescription": "「サウナは健康に良い」とよく言われますが、実際はどうなんでしょうか？あなたの知っていることを教えてください。",
    },
    {
        "topicId": 3,
        "topicTitle": "「お金と幸せは関係ない」は本当？",
        "topicDescription": "よく「お金と幸せは関係ない」と言う人がいます。あなたは本当だと思いますか？",
    },
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody: { userId: string, studySessionId: string } = req.body.data
    console.log(`${reqBody.userId} ${reqBody.studySessionId}がトピックを取得しました`)

    const randomElement = topics[Math.floor(Math.random() * topics.length)];
    res.status(200).json(randomElement)
}