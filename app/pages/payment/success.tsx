import { useRouter } from "next/router"
import { useEffect } from "react"
import Seo from "../../components/common/Seo"
import { FireGaEvent } from "../../models/gtag"

export default () => {
    const router = useRouter()
    useEffect(() => {
        FireGaEvent({ action: "conversion", category: "payment", label: `success` })
        router.push("/")
    }, [])
    return <div>
        <Seo ogpInfo={{}} />
    </div>
}