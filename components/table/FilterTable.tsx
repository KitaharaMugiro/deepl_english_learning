import { Drawer } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { useAtom } from "jotai"
import React, { useEffect, useState } from "react"
import { AtomActiveFilter } from "../../models/jotai/SecretJotai"
import MultiSelector from "../form/MultiSelector"

interface Props {
    open: boolean
    storeList: string[]
    onClose?: () => void
}


export default (props: Props) => {

    const anchor = "bottom"
    const daiType = ["ミドルスペック", "ライトミドルスペック", "甘デジ"]

    //初期値は全部選択
    const [activeFilter, setActiveFilter] = useAtom(AtomActiveFilter)
    const [selectedStoreNames, setSelectedStoreNames] = useState<string[]>(props.storeList)
    const [selectedDaiType, setSelectedDaiType] = useState(daiType)
    const [tabValue, setTabValue] = useState(0)

    useEffect(() => {
        if (!activeFilter) {
            //アクティブフィルターがなければ初期化
            setActiveFilter({
                storeNames: props.storeList,
                daiType: ["甘デジ", "ミドルスペック", "ライトミドルスペック"],
                midThresh: 1000,
                lightMidThresh: 1000,
                amaThresh: 1000
            })
        }
    }, [])

    const handleChangeStoreNames = (newSelected: string[]) => {
        setSelectedStoreNames(newSelected);
        activeFilter!.storeNames = newSelected
        setActiveFilter(activeFilter)
    };

    const handleChangeDaiType = (newSelected: string[]) => {
        setSelectedDaiType(newSelected);
        activeFilter!.daiType = newSelected
        setActiveFilter(activeFilter)
    };

    const onChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };

    const onChangeThresh = (value: string, type: string) => {
        if (type === "mid") {
            activeFilter!.midThresh = Number(value)
        } else if (type === "light") {
            activeFilter!.lightMidThresh = Number(value)
        } else if (type === "ama") {
            activeFilter!.amaThresh = Number(value)
        }
        const newActiveFilter = Object.assign({}, activeFilter);
        setActiveFilter(newActiveFilter)
    }

    return (
        <React.Fragment key={anchor}>
            <Drawer anchor={anchor} open={props.open} onClose={props.onClose}>
                {/* <Tabs value={tabValue} onChange={onChangeTab}>
                    <Tab label="フィルター1" />
                    <Tab label="フィルター2" />
                    <Tab label="フィルター3" />
                </Tabs> */}

                <div style={{ display: "flex", flexFlow: "column", padding: "14px" }}>
                    <MultiSelector title="表示する店舗名" selected={selectedStoreNames} options={props.storeList} onChange={handleChangeStoreNames} />
                    <MultiSelector title="表示する台の種類" selected={selectedDaiType} options={daiType} onChange={handleChangeDaiType} />
                    <TextField
                        value={activeFilter?.midThresh}
                        label="ミドルスペックリセット基準" type="number"
                        onChange={(event) => onChangeThresh(event.target.value, "mid")} />
                    <TextField
                        value={activeFilter?.lightMidThresh}
                        label="ライトミドルスペックリセット基準" type="number"
                        onChange={(event) => onChangeThresh(event.target.value, "light")} />
                    <TextField
                        value={activeFilter?.amaThresh}
                        label="甘デジリセット基準" type="number"
                        onChange={(event) => onChangeThresh(event.target.value, "ama")} />
                </div>
            </Drawer>
        </React.Fragment>
    )
}