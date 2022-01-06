import { Divider, Fab, Grid, Typography } from "@mui/material"

export default () => {
    return <div>
        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
            <div>
                <Typography
                    component="h1" variant="h2"
                    align="center" color="textPrimary"
                    gutterBottom>
                    メンテナンス中
                </Typography>
                <Divider style={{ margin: 20 }} />
                <Typography align="center" color="textSecondary" paragraph>
                    現在サービスを停止しています。<br />
                    復旧時期: 2022年1月8日<br />

                    ご迷惑をおかけしますが、何卒よろしくお願いします。<br />
                    興味がある方は<a href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link">事前登録</a>をいただけるとニュースをお届けできます。
                </Typography>

            </div>

        </Grid>
        <Fab
            variant="extended"
            color="primary"
            style={{ position: "fixed", right: 30, bottom: 30 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link" >
            <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
                事前登録受付中
            </Typography>
        </Fab>
    </div>
}