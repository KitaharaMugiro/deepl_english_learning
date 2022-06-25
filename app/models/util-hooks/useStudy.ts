import { useRouter } from "next/router"
import { LocalStorageHelper } from "../localstorage/LocalStorageHelper"

export default () => {
    const router = useRouter()
    const savePrevStudiedCategory = (categorySlug: string) => {
        LocalStorageHelper.savePreviousStudiedCategorySlug(categorySlug)
    }

    const goPrevStudiedCategory = () => {
        const categorySlug = LocalStorageHelper.getPreviousStudiedCategorySlug()
        if (categorySlug) {
            router.push(`/q/${categorySlug}/start`)
        } else {
            router.push(`/q/free/start`)
        }
    }

    const isPrevStudiedCategoryExist = () => {
        return LocalStorageHelper.getPreviousStudiedCategorySlug() !== null
    }

    return { isPrevStudiedCategoryExist, goPrevStudiedCategory, savePrevStudiedCategory }
}