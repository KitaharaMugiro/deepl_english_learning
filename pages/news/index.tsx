import { Container, Typography } from "@mui/material"
import { useEffect } from "react";
import Seo from "../../components/common/Seo"

export default () => {
    useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
    }, []);

    return <Container maxWidth="md">
        <Seo ogpInfo={{
            title: "更新情報",
            description: "Englisterの最新ニュースをお届けします。",
        }} />
        <Typography component="h1" variant="h3" style={{ marginTop: 40 }}>
            <b>Englister更新情報</b>
        </Typography>
        <Typography variant="subtitle2" component="h2" style={{ marginBottom: 20 }}>
            TwitterのEnglister公式アカウントでは、最新情報を発信しています。 <br />
            ぜひフォローして更新情報を受け取ってください！
        </Typography>

        <a href="https://twitter.com/englisterApp?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-screen-name="false" data-lang="ja" data-dnt="true" data-show-count="false">Follow @englisterApp</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        <div style={{ marginTop: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <a className="twitter-timeline" data-lang="ja" data-width="600" data-dnt="true" href="https://twitter.com/EnglisterApp?ref_src=twsrc%5Etfw">Tweets by EnglisterApp</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    </Container>
}