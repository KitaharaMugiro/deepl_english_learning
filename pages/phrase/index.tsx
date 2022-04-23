import { Container, Typography } from "@mui/material"
import Seo from "../../components/common/Seo"
import PhraseList from "../../components/phrase/PhraseList"

const Phrase = () => {

    return <Container maxWidth="md" >
        <Seo ogpInfo={
            {
                title: "フレーズ一覧",
                description: "英作文の練習をしている中で覚えておきたい文章や単語を登録しておくことができます。"
            }
        } />
        <Typography variant="h3" style={{ marginTop: 40 }}>
            <b>フレーズ</b>
        </Typography>
        <Typography variant="subtitle2" >
            覚えておきたい文章やフレーズなどがあればここに追加してください。
        </Typography>
        <div style={{ height: 15 }} />
        <PhraseList />
    </Container>

}

export default Phrase