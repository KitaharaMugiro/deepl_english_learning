import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { StudyApi } from "../../../api/StudyApi"
import CategoryStartFrame from "../../../components/study/CategoryStartFrame"
import { LeftHeartsAtom } from "../../../models/jotai/LeftHearts"
import startStudy from "../../../models/process/startStudy"
import usePlan from "../../../models/util-hooks/usePlan"
import useUseHeartConfirmation from "../../../models/util-hooks/useUseHeartConfirmation"

export default () => {
    const router = useRouter()
    const { categorySlug } = router.query
    const { openPlanModal, isPremium } = usePlan()
    const [loading, setLoading] = useState(false)
    const [leftHeart, setLeftHearts] = useAtom(LeftHeartsAtom)
    const { dialog, openDialog, setCallbackParameter } = useUseHeartConfirmation("study", async (categorySlug: string) => {
        setLoading(true)
        if (!loading) {
            try {
                await startStudy(categorySlug)
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
    })

    const onClickStart = async () => {
        openDialog(categorySlug)
        setCallbackParameter(categorySlug)
    }

    return <>
        {dialog}
        <CategoryStartFrame
            categorySlug={categorySlug as string}
            onClickStart={onClickStart} />
    </>
}