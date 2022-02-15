import { useRouter } from "next/router"
import StudyMainFrame from "../../components/study/StudyMainFrame"

export default () => {
    const router = useRouter()
    const { categorySlug } = router.query

    return <div style={{ padding: 10 }}>
        <StudyMainFrame categorySlug={categorySlug as string} />
    </div>
}

