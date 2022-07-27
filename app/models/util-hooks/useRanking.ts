import { useAtom } from "jotai";
import { RankingApi } from "../../api/RankingApi";
import { UserRankAtom, WeeklyRankingAtom } from "../jotai/WeeklyRanking";

function createData(
    rank: number,
    exp: number,
    isYou: boolean,
    reward: number
) {
    return { rank, exp, isYou, reward };
}


export default () => {
    const [userRank, setUserRank] = useAtom(UserRankAtom)
    const [ranking, setRanking] = useAtom(WeeklyRankingAtom)

    // 自分を含む三件を取得 (TODO: もうちょっとロジックなんとかしたい)
    let rows: Array<{ rank: number, exp: number, isYou: boolean, reward: number }> = []
    const fullRows = ranking.map((m, index) => createData(
        index + 1,
        m.totalExp,
        (index + 1) === userRank,
        m.reward))
    const userRow = fullRows.find(m => m.isYou)

    if (userRank === 0) {
        rows = []
    } else {
        // 自分を含む三件を取得
        rows = fullRows.slice(userRank - 2, userRank + 1)
    }

    const refresh = () => {
        RankingApi.getWeeklyRanking().then(res => {
            setUserRank(res.userRank)
            setRanking(res.ranking)
        })
    }

    return { userRank, ranking, refresh, rows, fullRows, userRow }
}