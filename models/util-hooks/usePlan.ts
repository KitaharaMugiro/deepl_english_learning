import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { SubscriptionApi } from "../../api/SubscriptionApi"
import { MaxHeartsAtom } from "../jotai/LeftHearts"
import { IsOpenPlanModalAtom } from "../jotai/PlanModalJotai"
import { IsOpenSigninModalAtom, PreviousUrlAtom } from "../jotai/PreviousUrl"

export default () => {
    const [isOpenPlanModal, setOpenPlanModal] = useAtom(IsOpenPlanModalAtom)
    const [maxHearts, setMaxHearts] = useAtom(MaxHeartsAtom)
    const [planName, setPlanName] = useState("")
    const [isPremium, setIsPremium] = useState(false)

    const openPlanModal = () => {
        setOpenPlanModal(true)
    }

    const closePlanModal = () => {
        setOpenPlanModal(false)
    }

    useEffect(() => {
        const getPlanName = async () => {
            const plan = await SubscriptionApi.getCurrentPlan()
            if (plan.plan === "3" && plan.status === "active") {
                setPlanName("継続プラン")
                setMaxHearts(3)
                setIsPremium(true)
            } else if (plan.plan === "10" && plan.status === "active") {
                setPlanName("がっつりプラン")
                setMaxHearts(10)
                setIsPremium(true)
            } else if (plan.plan === "unlimited" && plan.status === "active") {
                setPlanName("Unlimitedプラン")
                setMaxHearts(300)
                setIsPremium(true)
            } else {
                setPlanName("Freeプラン")
                setMaxHearts(0)
                setIsPremium(false)
            }
        }
        getPlanName()
    }, [])

    return { isPremium, planName, maxHearts, isOpenPlanModal, openPlanModal, closePlanModal }
}