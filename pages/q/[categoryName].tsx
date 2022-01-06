import { useRouter } from "next/router"
import { useState } from "react"
import CategoryStartFrame from "../../components/study/CategoryStartFrame"
import StudyMainFrame from "../../components/study/StudyMainFrame"

export default () => {
    const router = useRouter()
    const { categoryName } = router.query

    const [start, setStart] = useState(false)
    const render = () => {
        if (start) {
            return <StudyMainFrame />
        } else {
            return <CategoryStartFrame
                categoryName={categoryName as string}
                onClickStart={() => setStart(true)} />
        }
    }
    return <div>
        {render()}
    </div>
}