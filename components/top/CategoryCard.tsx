import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material"
import Link from "next/link"

interface Props {
    imageUrl: string
    linkTo: string
    content: string
    isFocus?: boolean
}

export default (props: Props) => {
    return (
        <Card sx={{
            width: 280, height: 185, border: props.isFocus ? "1px solid rgba(81, 203, 238, 1)" : "",
            boxShadow: props.isFocus ? "0 0 5px rgba(81, 203, 238, 1)" : ""
        }}>
            <Link href={props.linkTo} passHref>
                <a>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.imageUrl}
                        />
                    </CardActionArea>
                </a>

            </Link>
            <CardContent>
                <b>{props.content}</b>
            </CardContent>
        </Card>
    )
}