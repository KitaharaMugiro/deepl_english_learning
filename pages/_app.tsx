import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { LocalStorageHelper } from '../models/localstorage/LocalStorageHelper';

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

    const image = ""
    const title = "LearningEnglish"
    const description = "自分の意見を英語で言わなければいけない時の練習になります"
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                {/* <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://deiyp816qxdlj.cloudfront.net/" />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content={title} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@tcr_jp" />
                <meta name="twitter:url" content={image} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} /> */}
            </Head>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
        </React.Fragment>
    );
}