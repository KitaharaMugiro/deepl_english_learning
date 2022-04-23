import { Container, Typography } from "@mui/material"
import Seo from "../../components/common/Seo"
import StudyRecordList from "../../components/dashboard/StudyRecordList"

export default () => {
    return <Container maxWidth="xl">
        <Seo
            ogpInfo={{
                title: "学習履歴",
            }}
        />
        <Container maxWidth="lg" >
            <Typography variant="h4" style={{ marginTop: 50 }}>
                <b>学習履歴</b>
            </Typography>
            <StudyRecordList />
        </Container>
    </Container>
}