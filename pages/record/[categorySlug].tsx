import { Button } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import StudyRecordMainFrame from "../../components/record/StudyRecordMainFrame"
import useLevelUp from "../../models/util-hooks/useLevelUp"

const RecordPage = () => {
    const router = useRouter()
    const { categorySlug } = router.query
    // const { addExp } = useLevelUp()


    return (
        <>
            <StudyRecordMainFrame categorySlug={categorySlug as string} />
            {/* <Button onClick={() => addExp(10, "an")}>add</Button> */}
        </>
    )
}

export default RecordPage