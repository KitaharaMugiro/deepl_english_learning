import { Container, Typography } from "@mui/material"
import MyNoteList from "../../components/mynote/MyNoteList"
import PhraseList from "../../components/phrase/PhraseList"

export default () => {
    return <Container maxWidth="md" >
        <Typography variant="h3" style={{ marginTop: 40 }}>
            <b>マイノート</b>
        </Typography>
        <Typography variant="subtitle2" >
            学習時のメモをノートに記録しておくことができます。
        </Typography>
        <div style={{ height: 15 }} />
        <MyNoteList />
    </Container>
}