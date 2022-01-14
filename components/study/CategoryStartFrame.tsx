import { Button, Card, CardMedia, Divider, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { CategoryApi } from "../../api/CategoryApi"
import { Category } from "../../models/type/Category"
import HowToPlayEnglister from "./HowToPlayEnglister"

interface Props {
    categorySlug: string
    onClickStart: () => void
}

export default (props: Props) => {
    const [category, setCategory] = useState<Category | undefined>(undefined)

    useEffect(() => {
        const getCategory = async () => {
            if (props.categorySlug) {
                const category = await CategoryApi.getCategoryDetail(props.categorySlug)
                setCategory(category)
            }
        }
        getCategory()
    }, [props.categorySlug])

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
                    image={category?.categoryImageUrl}
                />

                <Typography
                    component="h1" variant="h4"
                    align="center" color="textPrimary"
                    style={{ marginTop: 20 }}
                    gutterBottom>
                    <b>{category?.categoryName}</b>
                </Typography>
                <Divider style={{ margin: 10 }} />
                <Typography align="center" color="textSecondary" paragraph>
                    {category?.categoryDescription}
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