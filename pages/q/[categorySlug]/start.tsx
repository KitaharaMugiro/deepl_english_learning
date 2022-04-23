import { useAtom } from "jotai"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { CategoryApi } from "../../../api/CategoryApi"
import { StudyApi } from "../../../api/StudyApi"
import Seo, { MetaData } from "../../../components/common/Seo"
import CategoryStartFrame from "../../../components/study/CategoryStartFrame"
import { LeftHeartsAtom } from "../../../models/jotai/LeftHearts"
import usePlan from "../../../models/util-hooks/usePlan"

const CategoryStart = ({ ogpInfo }: { ogpInfo: MetaData }) => {
    const router = useRouter()
    const { categorySlug } = router.query
    const { openPlanModal, isPremium } = usePlan()
    const [loading, setLoading] = useState(false)
    const [leftHeart, setLeftHearts] = useAtom(LeftHeartsAtom)

    const onClickStart = async () => {
        setLoading(true)
        if (!loading) {
            try {
                await StudyApi.studyStart(categorySlug as string)
                router.push(`/q/${categorySlug}`)
            } catch (e) {
                console.warn(e)
                openPlanModal()
            }
            StudyApi.leftHeart().then(({ leftHeart }) => {
                setLeftHearts(leftHeart)
            })
        }
        setLoading(false)
    }

    return <>
        <Seo ogpInfo={ogpInfo} />
        <CategoryStartFrame
            categorySlug={categorySlug as string}
            onClickStart={onClickStart} />
    </>
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


export default CategoryStart