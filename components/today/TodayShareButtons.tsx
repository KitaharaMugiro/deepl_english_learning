import { Button, Typography } from "@mui/material"
import { TwitterShareButton, TwitterIcon } from "react-share"
import { useSnackMessage } from "../../models/util-hooks/useSnackMessage"

interface Props {
    name: string
    resultId: string
}

export default (props: Props) => {
    if (!process.browser) return null

    const { displaySuccessMessage } = useSnackMessage()

    const title = `今日の英語年齢 ${props.name}さんの診断結果`
    const url = `https://english.yunomy.com/today/${props.resultId}`
    const isShareable = navigator.share !== undefined

    const share = () => {
        if (navigator.share) {
            navigator.share({
                text: title,
                url
            })
        } else {
            navigator.clipboard.writeText(title + "\n" + url)
            displaySuccessMessage("URLをクリップボードにコピーしました")
        }
    };

    return <>
        <TwitterShareButton
            style={{ width: "100%" }}
            title={title}
            hashtags={["Englister", "英語力診断", "毎日英語年齢診断"]}
            url={url}
        >
            <Button
                variant="contained"
                size="large"
                disableElevation
                fullWidth
                style={{ backgroundColor: "#00aced" }}
            >
                <TwitterIcon />
                <Typography variant="h5">
                    結果をツイートする
                </Typography>
            </Button>
        </TwitterShareButton>
        <div style={{ height: 7 }} />
        <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={share}
        >
            <Typography variant="h4">
                {isShareable ? "結果をシェアする" : "結果をコピーする"}
            </Typography>
        </Button>
    </>
}