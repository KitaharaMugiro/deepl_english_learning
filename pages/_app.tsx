import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ThemeProvider,
    Theme,
    StyledEngineProvider,
    Toolbar,
    Typography,
} from '@mui/material';
import { LocalStorageHelper } from '../models/localstorage/LocalStorageHelper';
import MyHeader from '../components/header/MyHeader';
import { useRouter } from 'next/dist/client/router';
import { pageview } from '../models/gtag';
import { GA_ID, existsGaId } from '../models/gtag'



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

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
    const router = useRouter();
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
            <div style={{ height: 60 }} />
            <Component {...pageProps} />
        </React.Fragment>
    );
}