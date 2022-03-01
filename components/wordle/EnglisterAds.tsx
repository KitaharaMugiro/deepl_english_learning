import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import Link from "next/link"

export default () => {
    return <div style={{
        padding: 30,
        width: "100%",
        backgroundColor: "#273132",
        marginTop: 140,
        minHeight: 360,
    }}>
        <div style={{ display: "flex", overflowX: "scroll" }}>
            <Link href="/q/it_interview/start" passHref>
                <a>
                    <Card sx={{
                        width: 280, height: 300, marginRight: 5,
                        overflowY: "scroll",
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/otehon2.png"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h6">英語面接に困ってないですか？</Typography>
                            <Typography variant="body1">自分の意見を論理的に英語で言えるようになるEnglisterで勉強する</Typography>
                        </CardContent>
                    </Card>
                </a>
            </Link>

            <Link href="/today" passHref>
                <a>
                    <Card sx={{
                        width: 280, height: 300, marginRight: 5,
                        overflowY: "scroll",
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/ogp/slide_6.png"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h6">英語年齢を測ろう</Typography>
                            <Typography variant="body1">1問の問題であなたのネイティブ英語年齢を測れます</Typography>
                        </CardContent>
                    </Card>
                </a>
            </Link>

            <Link href="/" passHref>
                <a>
                    <Card sx={{
                        width: 280, height: 300, marginRight: 5,
                        overflowY: "scroll",
                    }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/otehon.png"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h6">Englister</Typography>
                            <Typography variant="body1">最高効率で勉強するならEnglister!</Typography>
                        </CardContent>
                    </Card>
                </a>
            </Link>
        </div>
    </div>

}