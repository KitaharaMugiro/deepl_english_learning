import { Backdrop, CircularProgress } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GetTodayTopicResponse, TodayApi } from "../../api/TodayApi"
import CustomizedMetaTags, { OgpInfo } from "../../components/common/CustomizedMetaTags"
import TodayStudyMainFrame from "../../components/today/TodayStudyMainFrame"

const TodayPage = ({ ogpInfo }: { ogpInfo: OgpInfo }) => {

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
            <CustomizedMetaTags ogpInfo={ogpInfo} />
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
    return <TodayStudyMainFrame todayTopic={todayTopic} />
}


// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {

    const ogpInfo: OgpInfo = {
        title: "英語年齢診断 | あなたはネイティブ何歳並みの英語を話せますか？ | Englister",
        description: "お題に沿った英語を書くとあなたの英語力(英語年齢)を診断します。",
        image: "https://english.yunomy.com/static/ogp/slide_5.png"
    }
    return {
        props: {
            ogpInfo
        }
    }
}

export default TodayPage
