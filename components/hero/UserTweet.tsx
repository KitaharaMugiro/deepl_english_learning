import { useEffect, useState } from "react"
import { Tweet } from "react-twitter-widgets"

interface Props {
    tweetId: string;
}

//iPhone Safar対応
export default (props: Props) => {
    const [render, setRender] = useState(true)

    useEffect(() => {
        if (!navigator.platform) return;
        if (!navigator.userAgent) return;
        if ([
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) {
            setRender(false)
        }
    }, [])

    return <div style={{ padding: 5, display: render ? "block" : "none" }}>
        <Tweet
            tweetId={props.tweetId}
            options={{ width: 300, conversation: "none", cards: "hidden" }}
            renderError={() => <div style={{ margin: -5 }} />}
            onLoad={() => {
                setRender(true)
            }} />
    </div>
}