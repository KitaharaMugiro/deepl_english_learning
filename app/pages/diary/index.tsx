import { Container, Typography } from "@mui/material"
import Seo from "../../components/common/Seo"
import DiaryList from "../../components/diary/DiaryList"

export default () => <Container maxWidth="md">
    <Seo ogpInfo={{
        title: "英語日記",
        description: "英語日記を書くことができます。"
    }} />
    <Typography component="h1" variant="h3" style={{ marginTop: 40 }}>
        <b>英語日記</b>
    </Typography>
    <Typography variant="subtitle2" component="h2">
        英語日記を書くことができます。
    </Typography>
    <div style={{ height: 15 }} />
    <DiaryList />
</Container>