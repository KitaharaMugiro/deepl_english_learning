import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"

interface Props {
    imageUrl: string
    linkTo: string
    content: string
    description?: string
    isFocus?: boolean
}

export default (props: Props) => {
    return (
        <Link href={props.linkTo} passHref>
            <a>
                <Card sx={{
                    width: 280, height: 300,
                    overflowY: "scroll",
                    border: props.isFocus ? "1px solid rgba(81, 203, 238, 1)" : "",
                    boxShadow: props.isFocus ? "0 0 5px rgba(81, 203, 238, 1)" : "",
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.imageUrl}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h6">{props.content}</Typography>
                        <Typography variant="body1">{props.description}</Typography>
                    </CardContent>
                </Card>
            </a>
        </Link>
    )
}