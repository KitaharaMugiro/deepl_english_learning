import { Button, Card, TextField } from "@mui/material"
import { useState } from "react"

interface Props {
    title: string
    english: string
    setEnglish: (english: string) => void
    onClickNext: () => void
    loading: boolean
}


export default (props: Props) => {
    const textFieldPlaceholder = "上の日本語を英訳してみよう"
    const [disable, setDisable] = useState(false)

    return (
        <Card style={{ padding: 20 }}>
            <h2 style={{ fontWeight: 700 }} >
                {props.title}
            </h2>
            <div style={{
                position: "relative",
                marginTop: 20
            }}>
                <TextField
                    label={textFieldPlaceholder}
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={props.english}
                    onChange={e => props.setEnglish(e.target.value)}
                />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.onClickNext}
                    disabled={props.loading || disable}
                    style={{
                        marginTop: "30px",
                        marginLeft: "10px",
                    }}
                >
                    {props.loading ? "少し待ってね..." : "AIに添削してもらう"}

                </Button>
            </div>
        </Card>
    )
}