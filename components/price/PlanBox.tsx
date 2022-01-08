import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import style from "./style.module.css"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

interface Props {
    planName: string
    price: number
    features: string[]
    numberOfFeatures: number
}
export default (props: Props) => {
    const renderFeatures = () => {
        return [...Array(props.numberOfFeatures)].map((_, i) => i).map(number => {
            const f = props.features[number]
            if (!f) return <Box style={{ visibility: "hidden" }} className={style.check} key={number}
            >
                <CheckRoundedIcon className={style.checkIcon} />
                <Typography variant="body1" noWrap style={{ marginLeft: 8 }}>
                    {f}
                </Typography>
            </Box>
            let fontSize = undefined
            if (encodeURI(f).replace(/%../g, "*").length > 30) fontSize = 10
            return (
                <Box className={style.check} key={f}>
                    <CheckRoundedIcon className={style.checkIcon} />
                    <Typography variant="body1" noWrap style={{ marginLeft: 8, fontSize }}>
                        {f}
                    </Typography>
                </Box>

            )
        })
    }

    return <div className={style.box}>
        <Box style={{ marginBottom: 16 }}>
            <Typography className={style.title} variant="h6">{props.planName}</Typography>
        </Box>
        <Box style={{ marginBottom: 16 }}>
            <Typography variant="h4">
                <span>
                    {props.price}円
                    <Typography variant="body1" noWrap style={{ display: "inline" }}>
                        /月(税込)
                    </Typography>
                </span>
            </Typography>
        </Box>

        {renderFeatures()}
    </div>
}