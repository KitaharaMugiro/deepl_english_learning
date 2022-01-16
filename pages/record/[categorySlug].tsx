import { Cookie } from "@mui/icons-material"
import { useRouter } from "next/router"
import React from "react"
import MyHeader from "../../components/header/MyHeader"
import StudyRecordMainFrame from "../../components/record/StudyRecordMainFrame"

export default () => {
    const router = useRouter()
    const { categorySlug } = router.query
    return (
        <>
            <StudyRecordMainFrame categorySlug={categorySlug as string} />
        </>
    )
}