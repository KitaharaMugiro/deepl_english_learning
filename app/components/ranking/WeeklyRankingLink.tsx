
import { Link } from "@mui/material";
import { useEffect } from "react";
import useRanking from "../../models/util-hooks/useRanking";


export default () => {
    const { refresh, userRow } = useRanking()
    useEffect(() => {
        refresh()
    }, [])

    if (!userRow) return <Link href="/dashboard">未参加(問題を解いて参加)</Link>

    return <div style={{ textAlign: "center", fontSize: 30 }}>
        <Link href="/weeklyRanking">{userRow?.rank}位</Link>
    </div>
}