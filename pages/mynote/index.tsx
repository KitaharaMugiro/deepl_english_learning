import { Container, Typography } from "@mui/material"
import Seo from "../../components/common/Seo"
import MyNoteList from "../../components/mynote/MyNoteList"
import PhraseList from "../../components/phrase/PhraseList"

export default () => <Container maxWidth="md">
    <Seo ogpInfo={{
        title: "マイノート",
        description: "学習時のメモをノートに記録しておくことができます。"
    }} />
    <Typography variant="h3" style={{ marginTop: 40 }}>
        <b>マイノート</b>
    </Typography>
    <Typography variant="subtitle2">
        学習時のメモをノートに記録しておくことができます。
    </Typography>
    <div style={{ height: 15 }} />
    <MyNoteList />
</Container>