import { useRouter } from "next/router"
import ReStudyMainFrame from "../../components/study/ReStudyMainFrame"
import StudyMainFrame from "../../components/study/StudyMainFrame"

export default () => {
    const router = useRouter()
    const { studySessionId } = router.query
    return <div>
        <ReStudyMainFrame studySessionId={studySessionId as string} />
    </div>
}