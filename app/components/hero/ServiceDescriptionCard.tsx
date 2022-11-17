import { Paper, Grid } from "@mui/material"
import { HeroCardWidth } from "./HeroCardConst"
import ServiceDescription from "./ServiceDescription"

export default () => {
    return <Paper style={{ maxWidth: HeroCardWidth }}>
        <Grid container p={3} spacing={6} alignItems="center" justifyContent="center">
            <Grid item md={6}>
                <ServiceDescription />
            </Grid>
            <Grid item md={6}>
                <img src="/static/category/playful_cat.png"
                    style={{
                        width: 300,
                        height: 250,
                        objectFit: "cover"
                    }} />
            </Grid>
        </Grid>
    </Paper>
}