import { Button } from '@mui/material';
import { useState } from 'react';
import styles from "./style.module.css";

interface Props {
    onClickModal: (mode: "Japanese" | "English") => void
}

export default function WriteJapaneseOrEnglishMessageModal(props: Props) {
    const [displayModal, setDisplayModal] = useState(true)
    const onClickModal = (mode: "Japanese" | "English") => {
        console.log("debug = " + mode)
        props.onClickModal(mode)
        setDisplayModal(false)
    }

    return (
        <div
            style={{ display: displayModal ? "inherit" : "none" }}
            className={styles.ready_modal}>
            <p style={{ fontSize: "18px", color: "black" }}>
                あなたの意見を記述してください。<br />
                <div style={{ marginTop: 10 }}>
                    <Button style={{ marginRight: 20 }} color="primary" variant="contained" size="large" disableElevation onClick={() => onClickModal("Japanese")}>日本語で書く</Button>
                    <Button style={{ marginLeft: 20 }} color="secondary" variant="contained" size="large" disableElevation onClick={() => onClickModal("English")}>英語で書く</Button>
                </div>
            </p>
        </div>
    );
}