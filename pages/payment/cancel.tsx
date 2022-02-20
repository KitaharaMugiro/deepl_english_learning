import { useRouter } from "next/router"
import { useEffect } from "react"
import { FireGaEvent } from "../../models/gtag"

export default () => {
    const router = useRouter()
    useEffect(() => {
        FireGaEvent({ action: "conversion", category: "payment", label: `cancel` })
        router.push("/")
    }, [])
    return <div>
    </div>
}