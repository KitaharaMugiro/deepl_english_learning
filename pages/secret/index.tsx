import CircularProgress from "@material-ui/core/CircularProgress";
import { useAtom } from "jotai";
import { useRouter } from "next/dist/client/router";
import React, { Fragment, useEffect, useState } from "react";
import { RankingTableItem, SecretApi } from "../../api/SecretApi";
import FilterTable from "../../components/table/FilterTable";
import PachiTable from "../../components/table/PachiTable";
import { AtomOpenFilter } from "../../models/jotai/SecretJotai";
import { LocalStorageHelper } from "../../models/localstorage/LocalStorageHelper";

export default () => {
    const router = useRouter()
    useEffect(() => {
        const checkUser = async () => {
            const userId = LocalStorageHelper.getSecretUserId()
            if (!userId) {
                router.push("/secret/login")
            } else {
                //userIdの検証をする
                const foundUser = await SecretApi.loginByUserId(userId)
                if (!foundUser) {
                    LocalStorageHelper.clearSecretUserSession()
                    router.push("/secret/login")
                }
            }
        }
        checkUser()
    }, [])

    useEffect(() => {
        const callApi = async () => {
            const rankingTable = await SecretApi.getRankingTable()
            setRankingTable(rankingTable)
        }
        callApi()
    }, [])

    const [rankingTable, setRankingTable] = useState<RankingTableItem[]>([])
    const [open, setOpen] = useAtom(AtomOpenFilter)

    if (rankingTable.length === 0) {
        return (
            <CircularProgress />
        )
    }
    const _storeList = rankingTable.map(r => r.storeName)
    const storeList = Array.from(new Set(_storeList))

    return (
        <div >
            <FilterTable
                open={open}
                storeList={storeList}
                onClose={() => setOpen(false)} />
            <PachiTable rankingTable={rankingTable} />
        </div>
    )
}