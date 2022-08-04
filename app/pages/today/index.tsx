import { Backdrop, CircularProgress } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GetTodayTopicResponse, TodayApi } from "../../api/TodayApi"
import Seo, { MetaData } from "../../components/common/Seo"
import TodayStudyMainFrame from "../../components/today/TodayStudyMainFrame"

const TodayPage = ({ ogpInfo }: { ogpInfo: MetaData }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [todayTopic, setTodayTopic] = useState<GetTodayTopicResponse>()
    const router = useRouter()
    useEffect(() => {
        setIsLoading(true)
        //user idにアクセスするのでフロントからじゃないと呼べない
        TodayApi.getTodayTopic().then(res => {
            setTodayTopic(res)
            setIsLoading(false)
        })
    }, [])

    if (isLoading || !todayTopic) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Seo ogpInfo={ogpInfo} />
            <CircularProgress color="inherit" />
        </Backdrop>
    }

    //WARN: useEffectでもいいんじゃない？
    // ユーザの答えを取得しすでに解き終わっていたらResultページを出す
    if (todayTopic?.answer) {
        router.push(`/today/${todayTopic.answer.resultId}`)
        return <div />
    }

    // まだ未提出ならすぐに問題を出す
    return <div>
        <Seo ogpInfo={ogpInfo} />
        <TodayStudyMainFrame todayTopic={todayTopic} />
    </div>
}


// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {

    const ogpInfo: MetaData = {
        title: "毎日英作文チャレンジ | あなたはネイティブ何歳並みの英語を話せるか診断します",
        description: "英作文の練習問題であなたの英語力(英語年齢)を診断します。",
        image: "/static/ogp/slide_5.png",
        pagePath: "/today"
    }
    return {
        props: {
            ogpInfo
        }
    }
}

export default TodayPage
