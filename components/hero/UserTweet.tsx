import { Tweet } from "react-twitter-widgets"

interface Props {
    tweetId: string;
}

export default (props: Props) => {

    return <div style={{ padding: 5 }}>
        <Tweet
            tweetId={props.tweetId}
            options={{ width: 300, conversation: "none", cards: "hidden" }}
            renderError={() => <div style={{ margin: -5 }} />} />
    </div>
}