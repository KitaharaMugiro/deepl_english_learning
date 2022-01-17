import { Container, Typography } from "@mui/material"
import router from "next/router"
import QuestList from "../../components/quest/QuestList"

export default () => {
    return <>
        <Container maxWidth="lg" >
            <Typography variant="h3" style={{ marginTop: 40 }}>
                <b>クエスト</b>
            </Typography>

            <QuestList />
        </Container>
    </>
}