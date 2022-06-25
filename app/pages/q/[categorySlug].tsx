import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { CategoryApi } from "../../api/CategoryApi"
import Seo, { MetaData } from "../../components/common/Seo"
import StudyMainFrame from "../../components/study/StudyMainFrame"

export default ({ ogpInfo }: { ogpInfo: MetaData }) => {
    const router = useRouter()
    const { categorySlug } = router.query

    return <div style={{ padding: 10 }}>
        <Seo
            ogpInfo={ogpInfo}
        />
        <StudyMainFrame categorySlug={categorySlug as string} />
    </div>
}

// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { categorySlug } = context.query
    const res = await CategoryApi.getCategoryDetail(categorySlug as string)
    const ogpInfo: MetaData = {
        title: res.categoryName,
        description: res.categoryDescription,
        image: res.categoryImageUrl,
        pagePath: "/q/" + categorySlug + "/start",
    }
    return {
        props: {
            ogpInfo
        }
    }
}
