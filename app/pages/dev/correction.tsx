import { Button, Grid, Paper, Typography } from "@mui/material"
import { useState } from "react"
import { CorrectionApi } from "../../api/CorrectionApi"
import Seo from "../../components/common/Seo"
import TodayCorrectionView from "../../components/correction/TodayCorrectionView"

export default () => {
    const [userEnglish, setUserEnglish] = useState("")
    const [correction, setCorrection] = useState("こちらにAIによる添削結果が表示されます")
    const [isLoading, setIsLoading] = useState(false)
    const onClickCorrection = async () => {
        setIsLoading(true)
        try {
            const res = await CorrectionApi.correction(userEnglish)
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
            <TodayCorrectionView
                english={userEnglish}
                setEnglish={setUserEnglish}
                onClickNext={onClickCorrection}
                loading={isLoading}
            />
        </Grid>
        {renderCorrection()}
    </div>


}