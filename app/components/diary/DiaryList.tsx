import { Backdrop, Card, CardHeader, CircularProgress, Grid, IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material"
import useUser from "../../models/util-hooks/useUser"
import { ListMyDiaryQuery, useListMyDiaryQuery } from "../../src/generated/graphql"

interface Props {
    data: ListMyDiaryQuery | undefined
    loading: boolean
}

export default (props: Props) => {

    const { data, loading } = props

    const { user } = useUser()

    const renderDiaryList = () => {
        return data?.englister_Diary.map(diary => {
            return <div style={{ marginTop: 20 }}>
                <Card style={{ padding: 10 }}>
                    <CardHeader
                        title={<Typography variant="h6" style={{ fontWeight: 700 }} >
                            {new Date(diary.createdAt).toLocaleString()}
                        </Typography>}
                        subheader={
                            <Typography variant="inherit" style={{ marginTop: 0 }}>
                                {diary.translatedJapanese ?? diary.userInputText}
                            </Typography>
                        }
                    />
                    <Typography variant="caption">自分で書いた英語</Typography>
                    <Paper elevation={0} style={{ backgroundColor: "#eeeeee", padding: "20px", fontSize: "1rem" }}>
                        {diary.userInputEnglish}
                    </Paper>
                    <div style={{ height: 5 }} />
                    <Typography variant="caption">お手本の英語</Typography>
                    <Paper elevation={0} style={{ backgroundColor: "#e6ffed", padding: "20px", fontSize: "1rem" }}>
                        {diary.translatedEnglish}
                    </Paper>
                    <div style={{ height: 15 }} />
                </Card>
            </div>
        })
    }

    if (!user) {
        return <div>
            <Typography variant="caption">ログインすると英語日記を登録できるようになります</Typography>
        </div>
    }

    if (loading) {
        return <Backdrop open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    }

    if (data?.englister_Diary.length === 0) {
        return <div>
            <Typography variant="caption">まだ英語日記が登録されていません</Typography>
        </div>
    }
    return <div>
        {renderDiaryList()}

    </div>

}