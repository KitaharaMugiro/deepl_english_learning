import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { useEffect } from "react";
import useRanking from "../../models/util-hooks/useRanking";


export default () => {
    const { refresh, rows } = useRanking()
    useEffect(() => {
        refresh()
    }, [])

    if (rows.length === 0) return <Typography variant="overline">未参加(問題を解いて参加)</Typography>

    return <TableContainer style={{ backgroundColor: "#F2F2F2" }}>
        <Table size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>順位</TableCell>
                    <TableCell align="right">獲得経験値</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.rank}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" style={{ fontWeight: row.isYou ? 800 : 0 }}>
                            {row.rank}位 {row.isYou ? ' (You)' : ''}
                        </TableCell>
                        <TableCell align="right">{row.exp}pt</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    </TableContainer >
}