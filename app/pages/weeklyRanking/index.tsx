import FullWeeklyRankingTable from "../../components/ranking/FullWeeklyRankingTable";
import { nextFriday } from "date-fns";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
export default () => {

    const [leftTime, setLeftTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const END_DATE = nextFriday(new Date());
            END_DATE.setHours(18, 0, 0, 0);
            let leftTime = END_DATE.getTime() - Date.now();
            if (leftTime > 7 * 24 * 60 * 60 * 1000) {
                leftTime = leftTime - 7 * 24 * 60 * 60 * 1000;
            }
            setLeftTime(leftTime);
        }, 1000)
    }, [])

    const day = Math.floor(leftTime / (1000 * 60 * 60 * 24))
    const leftTimeStr = `${day}日${Math.floor(leftTime / (1000 * 60 * 60) % 24)}時間${Math.floor(leftTime / (1000 * 60) % 60)}分${Math.floor(leftTime / 1000 % 60)}秒`;

    return (
        <div style={{ display: "flex", justifyContent: "center", }}>
            <Seo
                ogpInfo={{
                    title: "週間ランキング",
                    pagePath: "/weeklyRanking",
                }}
            />
            <div style={{ maxWidth: 600 }}>
                <h1>週間ランキング</h1>
                <p>残り時間: {leftTimeStr}</p>
                <p>
                    レベルをクリアして、ランキングの順位をあげよう！
                </p>
                <FullWeeklyRankingTable />
            </div>
        </div>

    );
}