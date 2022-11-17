import { Button, Card, Divider, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import usePlan from "../../models/util-hooks/usePlan"
import useSignin from "../../models/util-hooks/useSignin"
import useUser from "../../models/util-hooks/useUser"
import { HeroCardWidth } from "./HeroCardConst"
import TryTodayProblem from "./TryTodayProblem"

export default () => {
    const router = useRouter()
    const { user } = useUser()
    const { openPlanModal } = usePlan()
    const { openSignin } = useSignin()

    const onStart = () => {
        if (user) {
            router.push("/dashboard")
        } else {
            openSignin()
        }
    }

    return (
        <div style={{ marginBottom: 30, width: "100%", maxWidth: HeroCardWidth }}>
            <Typography
                component="h1" variant="h3"
                align="center" color="textPrimary"
                gutterBottom>
                <b>Englister</b>
            </Typography>
            <Typography
                component="h2" variant="h4"
                align="center" color="textPrimary"
                gutterBottom>
                あなたの英語をAIが一瞬で添削します
            </Typography>

            <div style={{ height: 20 }} />
            <TryTodayProblem />
        </div>
    )
}