import { Card, Typography } from "@mui/material"
import useToken from "../../models/util-hooks/useToken"
import DiamondIcon from '@mui/icons-material/Diamond';

export default () => {
    const { token, tokenRateJpy, createdAt } = useToken()
    const createdAtString = new Date(createdAt).toLocaleString()

    return <>
        <Card style={{ padding: 20, flexGrow: 1 }}>
            <Typography variant="body1">
                トークン価値 ({createdAtString}更新)
            </Typography>
            <Typography variant="h5">
                ¥{tokenRateJpy} / 1トークン
            </Typography>

            <div style={{ height: 20 }}></div>

            <Typography variant="body1">
                保有トークン数
            </Typography>
            <Typography style={{ display: "flex", alignItems: "center" }} variant="h5">
                {token}
                <DiamondIcon color="primary" />
            </Typography>
        </Card></>
}