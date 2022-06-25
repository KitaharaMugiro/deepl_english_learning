import { Container, Typography } from "@mui/material"
import router from "next/router"
import Seo from "../../components/common/Seo"
import QuestList from "../../components/quest/QuestList"

export default () => {
    return <>
        <Seo
            ogpInfo={{
                title: "クエスト一覧",
            }}
        />
        <Container maxWidth="lg" >
            <Typography variant="h3" style={{ marginTop: 40 }}>
                <b>クエスト</b>
            </Typography>

            <QuestList />
        </Container>
    </>
}