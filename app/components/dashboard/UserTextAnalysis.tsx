import { Button, Card, makeStyles, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AnalysisResponse, UserTextAnalysisApi } from "../../api/UserTextAnalysisApi";
import usePlan from "../../models/util-hooks/usePlan";



export default () => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [analysis, setAnalysis] = useState<AnalysisResponse>([])
    const { openPlanModal, isPremium } = usePlan()
    const getAnalysis = async () => {
        const analysisList = await UserTextAnalysisApi.getAnalysis()
        setAnalysis(analysisList)
    }

    const requestAnalysis = async () => {

        //有料会員でなければモーダルを出す
        if (!isPremium) {
            openPlanModal()
            return
        }


        setLoading(true)
        try {
            await UserTextAnalysisApi.requestAnalysis()
            const analysisList = await UserTextAnalysisApi.getAnalysis()
            setAnalysis(analysisList)
            setLoading(false)
        } catch (e: any) {
            setErrorMessage(e.message)
            setLoading(false)
        }

    }


    useEffect(() => {
        setLoading(true)
        getAnalysis()
        setLoading(false)
    }, [])

    const button = <Button
        size="large" color="primary"
        variant="contained" disableElevation
        onClick={requestAnalysis}>AIに分析をしてもらう(有料会員のみ)</Button>


    if (loading) {
        return <div>Loading...(30秒ほどかかります)</div>
    }

    if (!analysis || analysis.length === 0) {
        return <div>
            {button}
        </div>
    }

    if (errorMessage) {
        return <div>
            <Typography variant="h6">Error</Typography>
            <Typography variant="body1">{errorMessage}</Typography>
            {!analysis}
        </div>
    }

    return <div>
        <div>
            {analysis.map((a, i) => {
                if (!a.analysisQuestion || !a.analysisAnswer) {
                    return <></>
                }
                return <Card key={i} style={{ margin: 10, padding: 10 }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">{a.analysisQuestion.trim()}</Typography>
                    <Typography style={{ whiteSpace: "pre-wrap" }} variant="body1">{a.analysisAnswer.trim()}</Typography>
                </Card>
            })}
        </div>

        <Typography variant="h6">分析に利用した文章</Typography>
        <div style={{ whiteSpace: "pre-wrap" }}>
            {analysis[0].userText.trim()}
        </div>
    </div>
}