import { useRouter } from "next/router"
import Seo from "../../components/common/Seo"
import ReStudyMainFrame from "../../components/study/ReStudyMainFrame"
import StudyMainFrame from "../../components/study/StudyMainFrame"

export default () => {
    const router = useRouter()
    const { studySessionId } = router.query
    return <div>
        <Seo
            ogpInfo={{
                title: "復習",
            }}
        />
        <ReStudyMainFrame studySessionId={studySessionId as string} />
    </div>
}
