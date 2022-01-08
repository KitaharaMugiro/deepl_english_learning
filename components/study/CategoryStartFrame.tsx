import { Button, Card, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material"
import HowToPlayEnglister from "./HowToPlayEnglister"

interface Props {
    categorySlug: string
    onClickStart: () => void
}

export default (props: Props) => {
    let imageUrl = "/static/category/playful_cat.svg"
    let categoryTitle = "Englister Basic"
    let description = "日常的な会話や簡単な質問を集めました。気軽に答えてね！"
    if (props.categorySlug === "free") {
        imageUrl = "/static/category/playful_cat.svg"
        categoryTitle = "Englister Free"
        description = "無料でEnglisterを試し放題。英語力がガンガン上がることを実感してください。"
    }


    return <div>

        <main style={{
            width: 'auto',
            maxWidth: "600px",
            marginRight: "auto",
            marginLeft: "auto"
        }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <CardMedia
                    component="img"
                    image={imageUrl}
                />

                <Typography
                    component="h1" variant="h4"
                    align="center" color="textPrimary"
                    style={{ marginTop: 20 }}
                    gutterBottom>
                    <b>{categoryTitle}</b>
                </Typography>
                <Divider style={{ margin: 10 }} />
                <Typography align="center" color="textSecondary" paragraph>
                    {description}
                </Typography>


                <HowToPlayEnglister />


                <Grid container justifyContent="center" style={{ marginTop: 30, marginBottom: 50 }}>

                    <Button
                        size="large"
                        variant="contained"
                        onClick={props.onClickStart}>スタート
                    </Button>
                </Grid>
            </Card>
        </main>
    </div>
}