import { Button, Card, Grid, Link, TextField, Tooltip, Typography } from "@mui/material"
import useToken from "../../models/util-hooks/useToken"
import DiamondIcon from '@mui/icons-material/Diamond';
import TokenWithdrawList from "../../components/token/TokenWithdrawList";
import { TokenApi } from "../../api/TokenApi";
import Seo from "../../components/common/Seo";
import { useState } from "react";
import { isAddress } from "ethers/lib/utils";
import TokenValueCard from "../../components/token/TokenValueCard";

export default () => {
    const MINIMUM_WITHDRAW_AMOUNT = 300
    const { token, tokenRateJpy, tokenRateMatic } = useToken()
    const disabled = (token) < MINIMUM_WITHDRAW_AMOUNT
    const [openDetail, setOpenDetail] = useState(false)
    const [address, setAddress] = useState("")

    const onClickWithdrawApplication = () => {
        setOpenDetail(true)
    }

    const onClickConfirmWithdraw = () => {
        if (window.confirm("出金申請をしてもよろしいですか？")) {
            TokenApi.requestWithdraw(address).then(() => {
                window.location.reload()
            })
        }
    }

    const renderWithdrawForm = () => {
        const matic = 100
        const commision = 100
        const engToken = token - matic - commision
        return <div>
            <Typography variant="body2">
                出金先のMetaMaskウォレットアドレスを入力してください。
            </Typography>
            <TextField
                style={{ marginTop: 10, marginBottom: 10 }}
                fullWidth
                label="MetaMaskウォレットアドレス"
                value={address}
                onChange={e => setAddress(e.target.value)} />
            <div style={{ height: 5 }}></div>
            <Typography variant="body2">
                Polygonネットワークに以下のトークンを送金します。
            </Typography>
            <div style={{ marginBottom: 20 }}>
                ・ <span style={{ fontWeight: "bold", fontSize: 25 }}>{engToken} ENG</span>トークン <br />
                ・ <span style={{ fontWeight: "bold", fontSize: 25 }}>{matic * tokenRateMatic} MATIC</span>トークン(暫定) <br />
                <b>{commision + matic}ENG</b>の手数料を引いています <br />
            </div>
            <Tooltip title={!isAddress(address) ? "正しいウォレットアドレスを入力してください" : ""} >
                <span>
                    <Button
                        style={{ marginBottom: 20 }}
                        onClick={onClickConfirmWithdraw}
                        variant="contained"
                        disableElevation
                        disabled={!isAddress(address)}
                    >出金申請をする</Button>
                </span>

            </Tooltip>
        </div>
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
                        ¥ {Math.floor(token * tokenRateJpy)}
                    </Typography>
                    <div style={{ height: 20 }}></div>

                    {!openDetail ?
                        <Tooltip title={disabled ? `${MINIMUM_WITHDRAW_AMOUNT}トークン以上で出金可能` : ""} >
                            <span>
                                <Button
                                    style={{ marginBottom: 20 }}
                                    onClick={onClickWithdrawApplication}
                                    variant="contained"
                                    disableElevation
                                    disabled={disabled}>トークンを出金する</Button>
                            </span>
                        </Tooltip> :
                        renderWithdrawForm()

                    }


                    <br />
                    <Link target="_blank" href="https://button-hearing-b81.notion.site/Q-A-ver2-89e6815106f740298125bd8ca5b57cbc">
                        出金申請についてのQ&A →
                    </Link>
                </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <TokenValueCard />
            </Grid>
        </Grid>

        <Typography style={{ marginTop: 30, marginBottom: 10 }}>出金履歴</Typography>
        <TokenWithdrawList />

    </div>
}