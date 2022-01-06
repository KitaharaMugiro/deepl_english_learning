import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { StudyApi } from '../../api/StudyApi';
import MyHeader from '../../components/header/MyHeader';
import StudyMainFrame from '../../components/study/StudyMainFrame';
import { AtomActiveQuestion } from '../../models/jotai/StudyJotai';
import resumeOrStartStudy from '../../models/process/resumeOrStartStudy';

export default () => {
    const router = useRouter()
    const [_, setActiveQuestion] = useAtom(AtomActiveQuestion)
    useEffect(() => {
        const getTopic = async () => {
            await resumeOrStartStudy()
            const res = await StudyApi.getTopic()
            setActiveQuestion({ title: res.topicTitle, description: res.topicDescription })
        }
        getTopic()
    }, [])
    return (
        <React.Fragment>
            <MyHeader />
            <StudyMainFrame />
        </React.Fragment>
    )
}