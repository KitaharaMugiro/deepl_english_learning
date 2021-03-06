import { Fab, Typography } from "@mui/material"
import useStudy from "../../models/util-hooks/useStudy"

export default () => {
    const { isPrevStudiedCategoryExist, goPrevStudiedCategory } = useStudy()
    if (!isPrevStudiedCategoryExist) return <div />
    return (
        <Fab
            variant="extended"
            color="primary"
            onClick={goPrevStudiedCategory}
            style={{ position: "fixed", right: 30, bottom: 30 }}>
            <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
                勉強を再開する
            </Typography>
        </Fab>
    )
}