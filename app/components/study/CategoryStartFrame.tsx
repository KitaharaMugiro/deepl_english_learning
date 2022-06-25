import { Backdrop, Button, Card, CardMedia, CircularProgress, Divider, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { CategoryApi } from "../../api/CategoryApi"
import { TopicApi } from "../../api/TopicApi"
import { Category } from "../../models/type/Category"
import ProgressBar from "../progress/ProgressBar"
import SuggestedCategoryList from "../record/SuggestedCategoryList"
import HowToPlayEnglister from "./HowToPlayEnglister"

interface Props {
    categorySlug: string
    onClickStart: () => void
}

export default (props: Props) => {
    const [category, setCategory] = useState<Category | undefined>(undefined)
    const [doneTopicNum, setDoneTopicNum] = useState(0)
    const [allTopicNum, setAllTopicNum] = useState<number | undefined>(undefined)
    const [noMore, setNoMore] = useState(false)


    useEffect(() => {
        const setDoneTopic = async () => {
            const result = await TopicApi.getDoneTopicIds(props.categorySlug)
            setDoneTopicNum(result.length)
        }
        const setAllTopic = async () => {
            const result = await TopicApi.getAllTopicId(props.categorySlug)
            setAllTopicNum(result.length)
        }
        if (props.categorySlug) {
            setDoneTopic()
            setAllTopic()
        }
    }, [props.categorySlug])

    useEffect(() => {
        if (doneTopicNum === allTopicNum) {
            setNoMore(true)
        } else {
            setNoMore(false)
        }
    }, [doneTopicNum, allTopicNum])

    useEffect(() => {
        const getCategory = async () => {
            if (props.categorySlug) {
                const category = await CategoryApi.getCategoryDetail(props.categorySlug)
                setCategory(category)
            }
        }
        getCategory()
    }, [props.categorySlug])

    if (allTopicNum === undefined) {
        return <Backdrop open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
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
                marginRight: "10px",
                marginLeft: "10px",
                maxWidth: "600px",
            }}>
                <CardMedia
                    component="img"
                    height={300}
                    image={category?.categoryImageUrl}
                />
                <div style={{ padding: 20 }}>
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

                    <ProgressBar
                        value={doneTopicNum}
                        maximum={allTopicNum}
                    />
                    <Grid container justifyContent="center" style={{ marginTop: 30 }}>
                        {!noMore && <Button
                            size="large"
                            variant="contained"
                            onClick={props.onClickStart}>スタート
                        </Button>}
                        {noMore && <Typography align="center" color="textSecondary">すべての問題を終えました😁</Typography>}
                    </Grid>
                    <div style={{ marginBottom: 50 }}>
                        {noMore && <>
                            <Typography variant="h5">別のお題をやる</Typography>
                            <SuggestedCategoryList excludeCategorySlugs={[props.categorySlug]} />
                        </>}
                    </div>
                </div>

            </Card>
        </main>
    </div>
}