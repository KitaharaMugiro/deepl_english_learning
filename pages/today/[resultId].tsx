import { GetServerSideProps } from "next"
import { TodayApi, GetTodayTopicResponse } from "../../api/TodayApi"
import CustomizedMetaTags, { OgpInfo } from "../../components/common/CustomizedMetaTags"
import TodayStudyReviewFrame from "../../components/today/TodayStudyReviewFrame"

const TodayResultPage = ({ todayTopicResult, ogpInfo }: { todayTopicResult: GetTodayTopicResponse, ogpInfo: OgpInfo }) => {
    console.log(todayTopicResult)

    return <div>
        <CustomizedMetaTags ogpInfo={ogpInfo} />
        <TodayStudyReviewFrame todayTopicResult={todayTopicResult} />
    </div>
}

// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { resultId } = context.query
    if (!resultId) {
        return { props: {} }
    }

    const todayTopicResult = await TodayApi.getResult(resultId as string)
    const ogpInfo: OgpInfo = {
        title: "英語年齢診断 | あなたはネイティブ何歳並みの英語を話せますか？ | Englister",
        description: todayTopicResult.question.title,
        image: `https://english.yunomy.com/static/ogp/slide${(todayTopicResult.answer?.age || 0) + 1}.png`
    }
    return {
        props: {
            todayTopicResult,
            ogpInfo
        }
    }
}
export default TodayResultPage

