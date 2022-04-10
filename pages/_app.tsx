import {
    CssBaseline, Theme
} from '@mui/material';
import { Auth, Hub } from 'aws-amplify';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { UserApi } from '../api/UserApi';
import MyFooter from '../components/footer/MyFooter';
import MyHeader from '../components/header/MyHeader';
import PlanGroupModal from '../components/price/PlanGroupModal';
import SigninModal from '../components/signin/SigninModal';
import { GA_ID, pageview } from '../models/gtag';
import { LocalStorageHelper } from '../models/localstorage/LocalStorageHelper';
import useUser from '../models/util-hooks/useUser';
import "../src/amplify" //消しちゃだめ
import "./global.css" //消しちゃだめ
import 'regenerator-runtime/runtime' //消しちゃだめ
import MyApolloClient from '../api/MyApolloClient';
import { ApolloProvider } from '@apollo/client';
import SignupActivationModal from '../components/signin/SignupActivationModal';
import MyBackdrop from '../components/common/MyBackdrop';
import MySnackbar from '../components/common/MySnackbar';
import CommonMetaTags from '../components/common/CommonMetaTags';
import PhraseDialog from '../components/phrase/PhraseDialog';
import LevelUpProgress from '../components/levelup/LevelUpProgress';
import { useAtom } from 'jotai';
import { BackdropAtom } from '../models/jotai/Backdrop';

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
    const [_, setOpenLoading] = useAtom(BackdropAtom)

    const router = useRouter()


    useEffect(() => {
        const handleStart = (url: string) => url !== router.asPath && setOpenLoading(true)
        const handleComplete = () => setOpenLoading(false)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })


    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    const { setUser, setLoadingUser } = useUser()
    useEffect(() => {
        const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
            console.log({ event, data })
            switch (event) {
                case 'signIn':
                    // console.log('User has signed in!', data);
                    setUser(data)
                    router.push('/dashboard')
                    break
                case 'customOAuthState':
                    console.log("you logged in ", data)
                    router.push(data)
                    break;
            }
        })

        setLoadingUser(true)
        Auth.currentAuthenticatedUser()
            .then(currentUser => {
                setUser(currentUser)
                setLoadingUser(false)
            })
            .catch(() => {
                console.log("Not signed in")
                setLoadingUser(false)
            });
        LocalStorageHelper.initializeUserId()
        UserApi.signin()

        return unsubscribe;
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

    return (
        <React.Fragment>
            <CommonMetaTags />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ApolloProvider client={MyApolloClient}>
                <MyHeader />
                <MyBackdrop />
                <MySnackbar />
                <SigninModal />
                <PlanGroupModal />
                <SignupActivationModal />
                <PhraseDialog />
                <div style={{ height: 60 }} />
                <Component {...pageProps} />
                <LevelUpProgress />
                <MyFooter />
            </ApolloProvider>
        </React.Fragment>
    );
}