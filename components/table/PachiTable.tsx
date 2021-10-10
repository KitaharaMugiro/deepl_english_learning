import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import { useAtom } from 'jotai';
import { AtomActiveFilter, AtomOpenFilter } from '../../models/jotai/SecretJotai';
import Button from '@material-ui/core/Button';
import { LocalStorageHelper } from '../../models/localstorage/LocalStorageHelper';
import { RankingTableItem } from '../../api/SecretApi';


function Row(props: { row: RankingTableItem, onChangeCheckbox: Function, isTempCustomeFiltered: Function }) {
    const { row } = props;
    const onChangeCheckbox = (event: any) => {
        const checked = event.target.checked
        props.onChangeCheckbox(checked, row.storeName, row.daimei, row.daiban)
    }
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <TableRow style={{ borderBottom: "unset" }}>
                <TableCell style={{ padding: "20px" }}>
                    <input type="checkbox"
                        checked={props.isTempCustomeFiltered(row.storeName, row.daimei, row.daiban)}
                        onChange={onChangeCheckbox}
                    />
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.storeName}
                </TableCell>
                <TableCell align="right">{row.daimei}</TableCell>
                <TableCell align="right">{row.daiban}</TableCell>
                <TableCell align="right">{row.leftCount}</TableCell>
                <TableCell align="right">{row.updateAt}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="right">最終スタート</TableCell>
                                        <TableCell align="right">大当たり回数</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell align="right">{historyRow.finalStart}</TableCell>
                                            <TableCell align="right">
                                                {historyRow.ooatari}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
    onClickDelete: () => void
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;
    const [open, setOpen] = useAtom(AtomOpenFilter)

    return (
        <Toolbar
        >
            {numSelected > 0 ? (
                <Typography color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <>
                    <Typography variant="h6" id="tableTitle" component="div">
                        リスト
                    </Typography>
                    <div>　</div>
                    <Button variant="contained" color="primary" onClick={() => setOpen(!open)}>フィルター</Button>
                </>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={props.onClickDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : <div />}

        </Toolbar>
    );
};


export default function CollapsibleTable(props: { rankingTable: RankingTableItem[] }) {

    const [customeFilterTemp, setCustomeFilterTemp] = useState<string[]>([])
    const [customeFilter, setCustomeFilter] = useState<string[]>([])

    const onClickDelete = () => {
        setCustomeFilter(customeFilter.concat(customeFilterTemp))
        setCustomeFilterTemp([])
    }

    const isTempCustomeFiltered = (storeName: string, daimei: string, daiban: string) => {
        return customeFilterTemp.includes(storeName + ":" + daimei + ":" + daiban)
    }

    const onChangeCheckbox = (checked: boolean, storeName: string, daimei: string, daiban: string) => {
        console.log("onChangeCheckbox " + checked)
        if (checked) {
            setCustomeFilterTemp(customeFilterTemp.concat(storeName + ":" + daimei + ":" + daiban))
        } else {
            setCustomeFilterTemp(customeFilterTemp.filter(r => r !== storeName + ":" + daimei + ":" + daiban))
        }
    }

    let rows = props.rankingTable

    //store filter
    rows = rows.filter(r => r.leftCount > 0)

    //custom filter
    const [activeFilter, setActiveFilter] = useAtom(AtomActiveFilter)
    if (activeFilter) {
        rows = rows.filter(r => {
            let threshhold = 0
            if (r.daiType === "ミドルスペック") {
                threshhold = activeFilter.midThresh
            } else if (r.daiType === "ライトミドルスペック") {
                threshhold = activeFilter.lightMidThresh
            } else if (r.daiType === "甘デジ") {
                threshhold = activeFilter.amaThresh
            }
            return activeFilter.storeNames.includes(r.storeName) &&
                activeFilter.daiType.includes(r.daiType) &&
                r.history[0].finalStart < threshhold
        })
    }


    //delete filter
    rows = rows.filter(r => !customeFilter.includes(r.storeName + ":" + r.daimei + ":" + r.daiban))

    //単純に100件まで
    const filteredRows = rows.slice(0, 50)

    return (
        <TableContainer component={Paper}>
            <EnhancedTableToolbar numSelected={customeFilterTemp.length} onClickDelete={onClickDelete} />
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>非表示</TableCell>
                        <TableCell>履歴</TableCell>
                        <TableCell>店名</TableCell>
                        <TableCell align="right">台名</TableCell>
                        <TableCell align="right">台番号</TableCell>
                        <TableCell align="right">天井までの残り回転数</TableCell>
                        <TableCell align="right">更新日</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {filteredRows.map((row) => (
                        <Row key={row.storeName + row.daimei + row.daiban} row={row}
                            isTempCustomeFiltered={isTempCustomeFiltered}
                            onChangeCheckbox={onChangeCheckbox}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}