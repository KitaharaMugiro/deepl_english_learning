import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@mui/styles'
import { GA_ID, existsGaId } from '../models/gtag'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    {/* Google Analytics */}
                    {existsGaId && (
                        <>
                            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                                }}
                            />
                        </>
                    )}
                    {/* PWA primary color */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                    {/* Microsoft Clarity */}
                    <script
                        dangerouslySetInnerHTML={
                            {
                                __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "dte0j84rmv");
                    `}} />

                </Head>
                {/* WARN: 背景色ここでつけてる */}
                <body style={{ backgroundColor: "#fafafa" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.

    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    const initialProps = await Document.getInitialProps(ctx);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props =>
                materialUiSheets.collect(<App {...props} />),
        })
    return {
        ...initialProps,
        styles: [
            <React.Fragment key="styles">
                {initialProps.styles}
                {materialUiSheets.getStyleElement()}
            </React.Fragment>,
        ],
    }
};