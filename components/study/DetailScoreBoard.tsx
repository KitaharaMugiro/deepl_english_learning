import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { Chip, Stack, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ApiSpecialClient } from '../../api/ApiSpecialClient';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { TwitterShareButton, TwitterIcon } from "react-share";
import { useAtom } from 'jotai';
import { AtomAge } from '../../models/jotai/StudyJotai';

interface Props {
    text: string
    translation: string
    resultId: string
}

export default (props: Props) => {
    const [distance, setDistance] = useState("")
    const [easiness, setEasiness] = useState("")
    const [wordDifficulity, setWordDifficulity] = useState("")
    const [age, setAge] = useState("")
    const [_, setAtomAge] = useAtom(AtomAge)

    useEffect(() => {
        if (props.text && props.translation) {
            const client = new ApiSpecialClient()
            client.englishScore(props.text, props.translation).then(res => {
                setDistance(res.score)
                setEasiness(res.easiness)
                setWordDifficulity(res.wordDifficulty)
                setAge(res.age + "歳")
                setAtomAge(res.age)
            })
        }

    }, [props.text, props.translation])

    return (

        <div>
            <Stack direction="row" spacing={1} sx={{ overflow: "scroll" }}>
                <Tooltip title="お手本英語と近いほど良くなります">
                    <Chip icon={<SportsScoreIcon />} label={distance} />
                </Tooltip>
                <Tooltip title="長くてしっかりした文章ほど良くなります">
                    <Chip icon={<ThumbUpAltIcon />} label={easiness} />
                </Tooltip>
                <Tooltip title="語彙が多いほど良くなります">
                    <Chip icon={<DriveFileRenameOutlineIcon />} label={wordDifficulity} />
                </Tooltip>
            </Stack>

            <div style={{ height: 10 }} />
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <Typography variant="h5">英語年齢: {age} </Typography>
                <div style={{ width: 10 }}></div>
                <TwitterShareButton
                    title={`Englisterで勉強したよ。\n回答はこちら↓`}
                    hashtags={["Englister", "英語年齢"]}
                    url={`https://english.yunomy.com/q/result/${props.resultId}`}
                ><TwitterIcon size={30} round={false} /></TwitterShareButton>
            </div>
        </div>
    )

}