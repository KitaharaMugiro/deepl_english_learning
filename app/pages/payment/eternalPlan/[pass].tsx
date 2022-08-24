import { Button } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SubscriptionApi } from "../../../api/SubscriptionApi"

const TodayResultPage = () => {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        const pass = router.query.pass
        if (pass && pass != "pass") {
            setPass(pass as string)
            router.replace(
                { pathname: "/payment/eternalPlan/pass" },
                undefined,
                { shallow: true }
            );
        }
    }, [router.query.pass])


    const registerEternalPlan = async () => {
        try {
            await SubscriptionApi.registerEternalPlan(pass as string)
            setSuccess(true)
        } catch {
            setError(true)
        }
    }

    useEffect(() => {
        if (success) {
            router.push("/")
        }
    }, [success])


    return <div style={{ padding: 30 }}>
        <div>
            <h1>NFT保有者限定！永年無料プラン！</h1>

            <p>このページはNFT保有者限定のページです。</p>
            <h4>注意事項</h4>
            <p>・すでに有料プランに入っている場合は、必ず先に退会してください</p>
            <p>・NFTを譲渡すると永年無料プランは失われます</p>
            <p>・このページを更新すると永年無料プランには入れなくなるため、NFT Gatewayから再入室してください。</p>

            <Button disabled={!pass || pass == "pass"} disableElevation variant="contained" size="large" onClick={registerEternalPlan}>
                OK
            </Button>

            {error && <p>エラーが発生しました。もう一度お試しください。</p>}
        </div>
    </div>
}


export default TodayResultPage

