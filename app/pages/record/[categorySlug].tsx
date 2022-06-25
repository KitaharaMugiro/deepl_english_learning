import { Button } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import Seo from "../../components/common/Seo"
import StudyRecordMainFrame from "../../components/record/StudyRecordMainFrame"
import useLevelUp from "../../models/util-hooks/useLevelUp"

const RecordPage = () => {
    const router = useRouter()
    const { categorySlug } = router.query

    return (
        <>
            <Seo
                ogpInfo={{}}
            />
            <StudyRecordMainFrame categorySlug={categorySlug as string} />
        </>
    )
}

export default RecordPage