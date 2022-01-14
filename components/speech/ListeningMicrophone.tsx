import style from "./style.module.css";
import MicNoneIcon from '@mui/icons-material/MicNone';

interface Props {
    pulsing: boolean
    onClick: () => void
}

export default (props: Props) => {
    return (
        <button id="speech" className={style.btn} onClick={props.onClick}>
            {props.pulsing ? <div className={style.pulseRing} /> : <div />}
            <MicNoneIcon style={{ width: 100, height: 100, padding: 20 }} />
        </button>
    )
}