import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { RecordApi } from '../../api/RecordApi';
import { StudyApi } from '../../api/StudyApi';
import { AtomJapanse, AtomEnglish } from '../../models/jotai/StudyJotai';
import { LocalStorageHelper } from '../../models/localstorage/LocalStorageHelper';
import resumeOrStartStudy from '../../models/process/resumeOrStartStudy';
import { StudyRecordDetail } from '../../models/type/StudyRecordDetail';
import { Copyright } from '../footer/Copyright';
import ProgressBar from '../progress/ProgressBar';


export default function StudyMainFrame() {
    const router = useRouter()
    const [doneTopicNum, setDoneTopicNum] = useState(0)

    useEffect(() => {
        const setDoneTopic = async () => {
            const result = await RecordApi.getDoneTopics()
            setDoneTopicNum(result.length)
        }
        setDoneTopic()
    }, [])

    const handleNext = async () => {
        await resumeOrStartStudy()
        router.push("/question/1_question")
    }

    const goDashboard = () => {
        router.push("/dashboard")
    }


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
                            maximum={10}
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