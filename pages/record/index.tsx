import { useAtom } from "jotai"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { StudyApi } from "../../api/StudyApi"
import MyHeader from "../../components/header/MyHeader"
import StudyRecordMainFrame from "../../components/record/StudyRecordMainFrame"
import { AtomEnglish, AtomJapanse } from "../../models/jotai/StudyJotai"
import { LocalStorageHelper } from "../../models/localstorage/LocalStorageHelper"
import { StudyRecordDetail } from "../../models/type/StudyRecordDetail"

export default () => {


    return (
        <>
            <MyHeader />
            <StudyRecordMainFrame />
        </>
    )
}