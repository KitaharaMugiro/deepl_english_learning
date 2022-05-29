import { useAtom } from "jotai";
import { RankingApi } from "../../api/RankingApi";
import { UserRankAtom, WeeklyRankingAtom } from "../jotai/WeeklyRanking";

function createData(
    rank: number,
    exp: number,
    isYou: boolean,
) {
    return { rank, exp, isYou };
}


export default () => {
    const [userRank, setUserRank] = useAtom(UserRankAtom)
    const [ranking, setRanking] = useAtom(WeeklyRankingAtom)

    // 自分を含む三件を取得
    let rows: Array<{ rank: number, exp: number, isYou: boolean }> = []
    if (userRank === 0) {
        rows = []
    } if (userRank === ranking.length) {
        if (ranking[userRank - 3]) {
            rows.push(createData(userRank - 2, ranking[userRank - 3].totalExp, false))
        }
        if (ranking[userRank - 2]) {
            rows.push(createData(userRank - 1, ranking[userRank - 2].totalExp, false))
        }
        if (ranking[userRank - 1]) {
            rows.push(createData(userRank, ranking[userRank - 1].totalExp, true))
        }
    } else {
        if (ranking[userRank - 2]) {
            rows.push(createData(userRank - 1, ranking[userRank - 2].totalExp, false))
        }
        if (ranking[userRank - 1]) {
            rows.push(createData(userRank, ranking[userRank - 1].totalExp, true))
        }
        if (ranking[userRank]) {
            rows.push(createData(userRank + 1, ranking[userRank].totalExp, false))
        }
    }

    const refresh = () => {
        RankingApi.getWeeklyRanking().then(res => {
            setUserRank(res.userRank)
            setRanking(res.ranking)
        })
    }

    return { userRank, ranking, refresh, rows }
}