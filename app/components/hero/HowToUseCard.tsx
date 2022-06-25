import { Card, Typography } from "@mui/material"
import { HeroCardWidth } from "./HeroCardConst"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
    {
        original: "/static/service_description/1.png"
    },
    {
        original: "/static/service_description/2.png"
    },
    {
        original: "/static/service_description/3.png"
    },
    {
        original: "/static/service_description/4.png"
    },
]

export default () => {
    return <Card elevation={1} style={{ paddingTop: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
        <Typography
            component="h1" variant="h4"
            align="center" color="textPrimary"
            gutterBottom>
            <b>基本的な使い方</b>
        </Typography>
        <ImageGallery
            items={images}
            showBullets
            showIndex
            infinite={false}
            showFullscreenButton={true}
            useBrowserFullscreen={false}
            showPlayButton={false} />;

    </Card>
}