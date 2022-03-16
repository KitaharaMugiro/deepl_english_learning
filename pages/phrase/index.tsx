import { Container, Typography } from "@mui/material"
import PhraseList from "../../components/phrase/PhraseList"
import PhraseList2 from "../../components/phrase/PhraseList2"

const Phrase = () => {

    return <Container maxWidth="md" >
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