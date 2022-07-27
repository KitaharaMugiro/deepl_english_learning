import { Button, Card, Grid, Link, Tooltip, Typography } from "@mui/material"
import useToken from "../../models/util-hooks/useToken"
import DiamondIcon from '@mui/icons-material/Diamond';
import { WindowSharp } from "@mui/icons-material";
import TokenWithdrawList from "../../components/token/TokenWithdrawList";
import { TokenApi } from "../../api/TokenApi";
import Seo from "../../components/common/Seo";
export default () => {
    const { token, tokenRate, createdAt } = useToken()
    const createdAtString = new Date(createdAt).toLocaleString()
    const disabled = (token * tokenRate) < 500

    const onClickWithdraw = () => {
        if (window.confirm("出金申請をしてもよろしいですか？")) {
            TokenApi.requestWithdraw().then(() => {
                window.location.reload()
            })
        }
    }

    return <div style={{ padding: 40 }}>
        <Seo
            ogpInfo={{
                title: "出金依頼",
                pagePath: "/token",
            }}
        />
        <Typography variant="h4" style={{ marginBottom: 40 }}>保有トークンの出金</Typography>
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
                <Card style={{ padding: 20, flexGrow: 1, marginRight: 40 }}>
                    <Typography variant="body1">
                        受取可能な合計残高(暫定値)
                    </Typography>
                    <Typography variant="h5">
                        ¥ {Math.floor(token * tokenRate)}
                    </Typography>
                    <div style={{ height: 20 }}></div>

                    <Tooltip title={disabled ? "¥500以上で出金可能" : ""} >
                        <span>
                            <Button style={{ marginBottom: 20 }} onClick={onClickWithdraw} variant="contained" disableElevation disabled={disabled}>出金申請をする</Button>

                        </span>
                    </Tooltip>
                    <br />
                    <Link href="https://button-hearing-b81.notion.site/d617e2e723ce45979fe4be62a9dc011d">
                        出金申請についてのQ&A →
                    </Link>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Card style={{ padding: 20, flexGrow: 1 }}>
                    <Typography variant="body1">
                        トークン価値 ({createdAtString}更新)
                    </Typography>
                    <Typography variant="h5">
                        ¥{tokenRate} / 1トークン
                    </Typography>

                    <div style={{ height: 20 }}></div>

                    <Typography variant="body1">
                        保有トークン数
                    </Typography>
                    <Typography style={{ display: "flex", alignItems: "center" }} variant="h5">
                        {token}
                        <DiamondIcon color="primary" />
                    </Typography>
                </Card>
            </Grid>
        </Grid>

        <Typography style={{ marginTop: 30, marginBottom: 10 }}>出金履歴</Typography>
        <TokenWithdrawList />

    </div>
}