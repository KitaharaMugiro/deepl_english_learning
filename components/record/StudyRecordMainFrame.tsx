import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { RecordApi } from '../../api/RecordApi';
import { TopicApi } from '../../api/TopicApi';
import startStudy from '../../models/process/startStudy';
import { Copyright } from '../footer/Copyright';
import ProgressBar from '../progress/ProgressBar';


interface Props {
    categorySlug: string
}

export default (props: Props) => {
    const router = useRouter()
    const [doneTopicNum, setDoneTopicNum] = useState(0)
    const [allTopicNum, setAllTopicNum] = useState<number | undefined>(undefined)

    useEffect(() => {
        const setDoneTopic = async () => {
            const result = await TopicApi.getDoneTopicIds(props.categorySlug)
            setDoneTopicNum(result.length)
        }
        const setAllTopic = async () => {
            const result = await TopicApi.getAllTopicId(props.categorySlug)
            setAllTopicNum(result.length)
        }
        if (props.categorySlug) {
            setDoneTopic()
            setAllTopic()
        }
    }, [props.categorySlug])

    const handleNext = async () => {
        await startStudy(props.categorySlug)
        router.push(`/q/${props.categorySlug}`)
    }

    const goDashboard = () => {
        router.push("/dashboard")
    }

    if (allTopicNum === undefined) return <div />
    return (
        <React.Fragment>
            <main style={{
                width: 'auto',
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <Paper style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    {/* タイトル */}
                    <Typography component="h1" variant="h4" align="center">
                        Your English is getting better!
                    </Typography>


                    <React.Fragment>
                        <ProgressBar
                            value={doneTopicNum}
                            maximum={allTopicNum}
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Button
                                onClick={goDashboard}
                                style={{
                                    marginTop: "30px",
                                    marginLeft: "10px",
                                }}
                            >
                                ダッシュボードへ行く
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                style={{
                                    marginTop: "30px",
                                    marginLeft: "10px",
                                }}
                            >
                                次の課題もやる
                            </Button>
                        </div>
                    </React.Fragment>

                </Paper>
                <Copyright />
            </main>
        </React.Fragment >
    );
}