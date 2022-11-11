import { Typography } from "@mui/material"

export default () => {
    return <div>
        <Typography variant="h5" component="h2" gutterBottom>
            Englister(イングリスター)について
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
            自分の考えや意見を英語で伝えることに不安を感じていませんか？
        </Typography>
        <br />

        <Typography variant="body1" component="p" gutterBottom>
            EnglisterはAI翻訳(DeepL)を先生役にして、<b>英作文の練習や添削ができるサービス</b>です。<br />
            ライティング力を身につけたり、外資系企業の英語面接対策に向いています。
        </Typography>
    </div>

}