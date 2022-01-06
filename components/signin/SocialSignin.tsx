import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Typography } from '@mui/material';
import { Auth } from 'aws-amplify';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import useSignin from "../../models/util-hooks/useSignin";

interface Props {
    url: string
}

export default ({ url }: Props) => {

    return <div style={{ width: "95%", maxWidth: 500 }}>
        <div style={{ height: 15 }} />
        <GoogleLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google, customState: url })} />
        <div style={{ height: 5 }} />
        <FacebookLoginButton onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook, customState: url })} />
    </div>
}