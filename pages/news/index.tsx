import { Typography } from "@mui/material"
import Seo from "../../components/common/Seo"

export default () => {


    return <div style={{ padding: 20 }}>
        <Seo ogpInfo={{
            title: "更新情報",
            description: "Englisterの最新ニュースをお届けします。",
        }} />
        <Typography variant="h4" component="h1">Englister更新情報</Typography>
        <Typography variant="body1" component="h2">
            TwitterのEnglister公式アカウントでは、最新情報を発信しています。 <br />
            ぜひフォローして更新情報を受け取ってください！
        </Typography>
        <a href="https://twitter.com/englisterApp?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="ja" data-dnt="true" data-show-count="false">Follow @englisterApp</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a className="twitter-timeline" data-lang="ja" data-width="600" data-dnt="true" href="https://twitter.com/EnglisterApp?ref_src=twsrc%5Etfw">Tweets by EnglisterApp</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    </div>
}