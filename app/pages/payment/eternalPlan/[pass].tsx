import { Button } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SubscriptionApi } from "../../../api/SubscriptionApi"
import DoneIcon from '@mui/icons-material/Done';
import useUser from "../../../models/util-hooks/useUser"
import usePlan from "../../../models/util-hooks/usePlan"
import ErrorIcon from '@mui/icons-material/Error';
import Seo from "../../../components/common/Seo"
const TodayResultPage = () => {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)
    const { user } = useUser()
    const { isPremium } = usePlan()

    const checkPoint = [
        {
            title: "NFT Gatewayからアクセスしてください",
            checked: pass !== ""
        },
        {
            title: "Englisterにログインをしてください",
            checked: user != undefined,
        },
        {
            title: "Englisterの定期プランを先に解約をしてください",
            checked: !isPremium,
        },
    ]
    const checked = checkPoint.filter((c) => !c.checked).length === 0

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

    const renderCheck = () => {
        return checkPoint.map(c => {
            return <div key={c.title} style={{ display: "flex", alignItems: "center", margin: 10 }}>
                {c.checked ?
                    <DoneIcon color="primary" /> :
                    <ErrorIcon color="error" />}
                {"　"}{c.title}
            </div>
        })
    }

    useEffect(() => {
        if (success) {
            router.push("/")
        }
    }, [success])


    return <div style={{ padding: 30 }}>
        <Seo ogpInfo={{
            title: "NFT会員証 登録ページ",
            description: "NFT会員証を持っている方はこちらから登録をしてください",
        }} />
        <div>
            <h1>NFT会員証 登録ページ</h1>

            <div style={{ marginTop: 20 }}>
                {renderCheck()}
            </div>


            <h4>注意事項</h4>
            <p>・上記チェックが全てOKの場合にプランに入ることができます</p>
            <p>・NFTを譲渡するとプランは失われます</p>
            <p>・このページを更新するとプランには入れなくなるため、NFT Gatewayから再入室してください。</p>

            <Button disabled={!checked} disableElevation variant="contained" size="large" onClick={registerEternalPlan}>
                プランに入る
            </Button>

            {error && <p>エラーが発生しました。問い合わせページから確認をお願いします。</p>}
        </div>
    </div>
}


export default TodayResultPage

