import Head from "next/head"

export default () => {
    const image = "https://english.yunomy.com/static/otehon2.png"
    const title = "Englister | 英語で意見を言えるようになるAI英作文添削アプリ"
    const description = "「あなたの英語年齢は5歳です。」英語年齢測ることから始めよう。適正年齢になるまでいつでもどこでも繰り返しAIが添削してくれます。"

    return (
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
    )
}