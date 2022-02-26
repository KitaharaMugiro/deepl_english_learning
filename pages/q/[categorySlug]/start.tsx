import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useState } from "react"
import { StudyApi } from "../../../api/StudyApi"
import CategoryStartFrame from "../../../components/study/CategoryStartFrame"
import { LeftHeartsAtom } from "../../../models/jotai/LeftHearts"
import usePlan from "../../../models/util-hooks/usePlan"

const CategoryStart = () => {
    const router = useRouter()
    const { categorySlug } = router.query
    const { openPlanModal, isPremium } = usePlan()
    const [loading, setLoading] = useState(false)
    const [leftHeart, setLeftHearts] = useAtom(LeftHeartsAtom)

    const onClickStart = async () => {
        if (categorySlug !== "free") {
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
        } else {
            await StudyApi.studyStart(categorySlug)
            router.push(`/q/${categorySlug}`)
        }
    }

    return <>
        {/* {dialog} */}
        <CategoryStartFrame
            categorySlug={categorySlug as string}
            onClickStart={onClickStart} />
    </>
}

export default CategoryStart