import { Container, Typography } from "@mui/material"
import StudyRecordList from "../../components/dashboard/StudyRecordList"

export default () => {
    return <Container maxWidth="xl">
        <Container maxWidth="lg" >
            <Typography variant="h4" style={{ marginTop: 50 }}>
                <b>学習履歴</b>
            </Typography>
            <StudyRecordList />
        </Container>
    </Container>
}