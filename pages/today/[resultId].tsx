import { GetServerSideProps } from "next"
import { TodayApi, GetTodayTopicResponse } from "../../api/TodayApi"
import Seo, { MetaData } from "../../components/common/Seo"
import TodayStudyReviewFrame from "../../components/today/TodayStudyReviewFrame"

const TodayResultPage = ({ todayTopicResult, ogpInfo }: { todayTopicResult: GetTodayTopicResponse, ogpInfo: MetaData }) => {
    if (!todayTopicResult) return <div>404</div>
    return <div>
        <Seo ogpInfo={ogpInfo} />
        <TodayStudyReviewFrame todayTopicResult={todayTopicResult} />
    </div>
}

// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { resultId } = context.query
    if (!resultId) {
        return { props: {} }
    }

    try {
        const todayTopicResult = await TodayApi.getResult(resultId as string)
        const ogpInfo: MetaData = {
            title: "英作文力診断 | あなたはネイティブ何歳並みの英語を話せるか診断します",
            description: todayTopicResult.question.title + " ←これに英語で答えてみましょう。",
            image: `/static/ogp/slide_${(todayTopicResult.answer?.age || 0) + 1}.png`,
            pagePath: `/today`
        }
        return {
            props: {
                todayTopicResult,
                ogpInfo
            }
        }
    } catch {
        const ogpInfo: MetaData = {
            title: "英作文力診断 | あなたはネイティブ何歳並みの英語を話せるか診断します",
            description: "英作文の練習問題であなたの英語力(英語年齢)を診断します。",
            image: `https://englister.yunomy.com/static/ogp/slide_5.png`
        }
        return {
            props: {
                ogpInfo
            }
        }
    }
}
export default TodayResultPage

