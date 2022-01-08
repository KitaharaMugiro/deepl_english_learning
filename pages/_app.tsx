import {
    CssBaseline, Theme
} from '@mui/material';
import { Auth, Hub } from 'aws-amplify';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { UserApi } from '../api/UserApi';
import MyHeader from '../components/header/MyHeader';
import SigninModal from '../components/signin/SigninModal';
import { GA_ID, pageview } from '../models/gtag';
import { LocalStorageHelper } from '../models/localstorage/LocalStorageHelper';
import useUser from '../models/util-hooks/useUser';
import "../src/amplify" //消しちゃだめ
import "./global.css" //消しちゃだめ

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme { }
}



declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme { }
}


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    //ログインする前のページにリダイレクトする
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

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        LocalStorageHelper.initializeUserId()
    }, [])


    const { setUser, setLoadingUser } = useUser()
    useEffect(() => {
        const getUser = async () => {
            setLoadingUser(true)
            try {
                const user = await Auth.currentAuthenticatedUser()
                setUser(user)
            } catch {
                console.log("No User info")
            }
            const result = await UserApi.signin()
            console.log(result.result)
            setLoadingUser(false)
        }
        getUser()
    }, [])


    useEffect(() => {
        // GA_TRACKING_ID が設定されていない場合は、処理終了
        if (!GA_ID) return;

        const handleRouteChange = (url: string) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const image = "https://english.yunomy.com/static/top.png"
    const title = "Englister"
    const description = "自分の意見を英語で言えるようになる最高の勉強法"
    return (
        <React.Fragment>
            <Head>

                <title>{title}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://english.yunomy.com/" />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content={title} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yuno_miyako2" />
                <meta name="twitter:url" content={image} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MyHeader />
            <SigninModal />
            <div style={{ height: 60 }} />
            <Component {...pageProps} />
        </React.Fragment>
    );
}