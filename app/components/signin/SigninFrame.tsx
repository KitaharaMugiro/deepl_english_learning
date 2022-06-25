import { Button, Divider, Link, Typography } from "@mui/material";
import { Auth } from 'aws-amplify';
import React from "react";
import SocialSignin from "./SocialSignin";
import style from "./index.module.css";
import useSignin from "../../models/util-hooks/useSignin";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";


export default () => {
    const { url } = useSignin()

    return <div className={style.center}>
        <div style={{ height: 30 }} />
        <Typography variant="h3" align="center"><b>Englister</b></Typography>
        <Typography variant="subtitle2" color="textSecondary" align="center">EnglisterはAI英語添削アプリです。<br />あなたの英語力を飛躍的に伸ばします。</Typography>
        <SocialSignin url={url} />
        <div style={{ height: 30 }} />
        <Divider flexItem>
            OR
        </Divider>
        <div style={{ height: 20 }} />
        <Button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Cognito, customState: url })} >メールアドレス認証</Button>
        <div style={{ height: 20 }} />
        <Typography variant="subtitle2" color="textSecondary" align="center">
            <Link href="t/terms_of_service">利用規約</Link>、
            <Link href="t/privacy_policy">プライバシーポリシー</Link>に同意したうえでログインしてください。</Typography>

        <div style={{ height: 40 }} />
    </div>
}

