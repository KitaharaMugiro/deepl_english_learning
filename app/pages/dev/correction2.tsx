import { Button, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { CorrectionApi } from "../../api/CorrectionApi"
import Seo from "../../components/common/Seo"
import MakeEnglishCorrectionView from "../../components/correction/MakeEnglishCorrectionView"
import TodayCorrectionView from "../../components/correction/TodayCorrectionView"

const randomJapaneseList = [
    "花見に行くのを楽しみにしていたのに、雨で台なしになった。",
    "その家は夜とても静かで、なかなか寝つけなかった。",
    "私たちは健康に有害な食品をそれと知らずに口にしていることが多い。",
    "素晴らしい人との出会いが人生を豊かにしてくれる。",
    "忙しくて本が読めないとこぼす人が多いが、その気になれば時間はつくれるものだ。",
    "日本でも、週末に多くの時間を子供たちと過ごす父親が増えてきた。"
]
export default () => {
    const [title, setTitle] = useState("")
    const [userEnglish, setUserEnglish] = useState("")
    const [correction, setCorrection] = useState("こちらにAIによる添削結果が表示されます")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * randomJapaneseList.length)
        setTitle(randomJapaneseList[randomIndex])
    }, [])


    const onClickCorrection = async () => {
        setIsLoading(true)
        try {
            const res = await CorrectionApi.correctionWithJapanse(userEnglish, title)
            setCorrection(res.answer)
        } catch {
            setCorrection("エラーが発生しました。時間を置いて再度お試しください。")
        }

        setIsLoading(false)
    }

    const renderCorrection = () => {
        if (!correction) return <div />
        return <div style={{ marginTop: 20 }}>
            <Grid container alignItems="center" justifyContent="center" >
                <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", paddingBottom: "40px", fontSize: "larger", maxWidth: 1000 }}>
                    <Typography variant="body1" style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
                        {correction}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    }

    return <div>
        <Seo ogpInfo={{ title: "Englister | AIによる英語添削" }} />
        <Grid container alignItems="center" justifyContent="center">
            <MakeEnglishCorrectionView
                title={title}
                english={userEnglish}
                setEnglish={setUserEnglish}
                onClickNext={onClickCorrection}
                loading={isLoading}
            />
        </Grid>
        {renderCorrection()}
    </div>


}