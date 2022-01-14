import { Typography } from "@mui/material"
import { Category } from "../../models/type/Category"
import ScrollableCategoryCards from "./ScrollableCategoryCards"

interface Props {
    rowTitle: string
    categories: Category[]
}

export default (props: Props) => {

    return <div style={{ margin: 20 }}>
        <Typography variant="h5"><b>{props.rowTitle}</b></Typography>
        <ScrollableCategoryCards categories={props.categories} />
    </div>
}