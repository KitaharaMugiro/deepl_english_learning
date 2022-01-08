import { useRouter } from "next/router"
import CategoryStartFrame from "../../../components/study/CategoryStartFrame"
import startStudy from "../../../models/process/startStudy"

export default () => {
    const router = useRouter()
    const { categorySlug } = router.query

    const onClickStart = async () => {
        await startStudy(categorySlug as string)
        router.push(`/q/${categorySlug}`)
    }

    return <CategoryStartFrame
        categorySlug={categorySlug as string}
        onClickStart={onClickStart} />
}