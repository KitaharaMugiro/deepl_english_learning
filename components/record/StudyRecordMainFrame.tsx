import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { StudyApi } from '../../api/StudyApi';
import { TopicApi } from '../../api/TopicApi';
import { LeftHeartsAtom, MaxHeartsAtom } from '../../models/jotai/LeftHearts';
import useEventSubmit from '../../models/util-hooks/useEventSubmit';
import usePlan from '../../models/util-hooks/usePlan';
import useSignupActivation from '../../models/util-hooks/useSignupActivation';
import useUser from '../../models/util-hooks/useUser';
import { Copyright } from '../footer/Copyright';
import LeftHearts from '../hearts/LeftHearts';
import ProgressBar from '../progress/ProgressBar';
import SuggestedCategoryList from './SuggestedCategoryList';


interface Props {
    categorySlug: string
}

export default (props: Props) => {
    const router = useRouter()
    const [noMore, setNoMore] = useState(false)
    const [doneTopicNum, setDoneTopicNum] = useState(0)
    const [allTopicNum, setAllTopicNum] = useState<number | undefined>(undefined)
    const [leftHeart, setLeftHearts] = useAtom(LeftHeartsAtom)
    const [maxHeart] = useAtom(MaxHeartsAtom)
    const [loading, setLoading] = useState(false)
    const { user, loadingUser } = useUser()
    const { openPlanModal } = usePlan()
    const { openSignupActivationModal } = useSignupActivation()
    const { submitTrial } = useEventSubmit()

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


    useEffect(() => {
        if (loadingUser) return
        if (!user) {
            if (doneTopicNum === 3 || doneTopicNum >= 5) {
                openSignupActivationModal()
            }
        }
        if (props.categorySlug === "free") {
            if (doneTopicNum >= 10) {
                submitTrial()
            }
        }
    }, [user, doneTopicNum])

    useEffect(() => {
        if (doneTopicNum === allTopicNum) {
            setNoMore(true)
        } else {
            setNoMore(false)
        }
    }, [doneTopicNum, allTopicNum])



    const handleNext = async () => {
        setLoading(true)
        try {
            await StudyApi.studyStart(props.categorySlug)
            router.push(`/q/${props.categorySlug}`)
        } catch (e) {
            console.warn(e)
            openPlanModal()
        }
        StudyApi.leftHeart().then(({ leftHeart }) => {
            setLeftHearts(leftHeart)
        })
        setLoading(false)
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

                    <Grid container alignItems="center" justifyContent="center" >
                        <LeftHearts
                            hearts={leftHeart} maxHearts={maxHeart}
                            showText={false} />
                    </Grid>
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
                        {!noMore && <Button
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            onClick={handleNext}
                            style={{
                                marginTop: "30px",
                                marginLeft: "10px",
                            }}
                        >
                            次の課題もやる
                        </Button>}
                    </div>

                    <div style={{ height: 30 }} />
                    <Typography variant="h5">別のお題に変えてみる</Typography>
                    <SuggestedCategoryList excludeCategorySlugs={[props.categorySlug]} />

                </Paper>
                <Copyright />
            </main>
        </React.Fragment >
    );
}

