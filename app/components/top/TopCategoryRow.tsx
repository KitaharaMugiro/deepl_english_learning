import { Typography } from "@mui/material"
import { Category } from "../../models/type/Category"
import ScrollableCategoryCards from "./ScrollableCategoryCards"

interface Props {
    rowTitle: string
    categories: Category[]
}

export default (props: Props) => {
    return <div>
        <Typography style={{ marginBottom: 10 }} variant="h5"><b>{props.rowTitle}</b></Typography>
        <Typography variant="subtitle2" gutterBottom component="h2">
            テーマやシチュエーション別の英作文の練習ができます。
        </Typography>
        <ScrollableCategoryCards categories={props.categories} />
    </div>
}