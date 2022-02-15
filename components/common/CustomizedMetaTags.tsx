import Head from "next/head"

export type OgpInfo = {
    title: string
    description: string
    image: string
}

interface Props {
    ogpInfo?: OgpInfo
}

export default (props: Props) => {
    if (!props.ogpInfo) return <div />
    const image = props.ogpInfo.image
    const title = props.ogpInfo.title
    const description = props.ogpInfo.description

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