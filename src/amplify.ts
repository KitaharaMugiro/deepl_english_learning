import Amplify, { Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import awsConfig from '../src/aws-exports';

function findUrlForEnv(urlStrings: Array<string>, isLocal: boolean): string {
    if (urlStrings.length === 1) return urlStrings[0];

    const re: RegExp = isLocal ? /^http:\/\/localhost/ : /^https:\/\//;
    const [url]: Array<URL> = urlStrings
        .filter((urlString) => urlString.match(re))
        .map((urlString) => new URL(urlString));
    if (!url) throw new Error("No valid URL found: " + urlStrings.join(","));
    return url.href;
}

function isDevelopment() {
    const { NODE_ENV } = process.env;
    return NODE_ENV === "development";
}

const redirectSignIn = findUrlForEnv(
    awsConfig.oauth.redirectSignIn.split(","),
    isDevelopment()
);

awsConfig.oauth.redirectSignIn = redirectSignIn
awsConfig.oauth.redirectSignOut = redirectSignIn
Amplify.configure(awsConfig);

export const useRedirect = () => {
    const router = useRouter()
    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            console.log(event)
            switch (event) {
                case 'signIn':
                    // console.log('User has signed in!', data);
                    break
                case 'customOAuthState':
                    console.log("you logged in ", data)
                    router.push(data)
                    break;
            }
        })
    }, [])
}