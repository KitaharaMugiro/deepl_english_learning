import { IconButton } from "@mui/material"
import useTextToSpeech from "../../models/util-hooks/useTextToSpeech"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface Props {
    text: string
}

export default (props: Props) => {
    const { speak, isTextToSpeechSupported } = useTextToSpeech()

    if (!isTextToSpeechSupported) return <div />

    return (
        <IconButton onClick={() => speak(props.text)}
            style={{
                position: "absolute", right: 0, bottom: -10,
                width: 60, height: 60
            }} >
            <VolumeUpIcon style={{ width: 60, height: 60, padding: 15 }} />
        </IconButton>
    )
}