import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { SubscriptionApi } from "../../api/SubscriptionApi"
import { FireGaEvent } from "../gtag"
import { MaxHeartsAtom } from "../jotai/LeftHearts"
import { IsOpenPlanModalAtom } from "../jotai/PlanModalJotai"

export default () => {
    const [isOpenPlanModal, setOpenPlanModal] = useAtom(IsOpenPlanModalAtom)
    const [maxHearts, setMaxHearts] = useAtom(MaxHeartsAtom)
    const [planName, setPlanName] = useState("")
    const [isPremium, setIsPremium] = useState(false)

    const openPlanModal = () => {
        FireGaEvent({ action: "click", category: "plan", label: "modal open" })
        setOpenPlanModal(true)
    }

    const closePlanModal = () => {
        FireGaEvent({ action: "click", category: "plan", label: "modal close" })
        setOpenPlanModal(false)
    }

    useEffect(() => {
        const getPlanName = async () => {
            try {

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
            } catch (e) {
                console.error(e)
                setPlanName("Freeプラン")
                setMaxHearts(0)
                setIsPremium(false)
            }
        }
        getPlanName()
    }, [])

    return { isPremium, planName, maxHearts, isOpenPlanModal, openPlanModal, closePlanModal }
}