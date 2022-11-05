import { useRouter } from "next/router"
import { useEffect } from "react"
import Seo from "../../components/common/Seo"
import { FireGaEvent } from "../../models/gtag"

export default () => {
    const router = useRouter()
    useEffect(() => {
        FireGaEvent({ action: "conversion", category: "payment", label: `cancel` })
        router.push("/")
    }, [])
    return <div>
        <Seo ogpInfo={{ title: "購入失敗" }} />
    </div>
}