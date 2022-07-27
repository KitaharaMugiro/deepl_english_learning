
import useToken from "../../models/util-hooks/useToken";
import DiamondIcon from '@mui/icons-material/Diamond';
import { Button } from "@mui/material";

export default () => {
    const { token, tokenRate, createdAt } = useToken()

    return <div style={{ textAlign: "center", fontSize: 30 }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {token}
            <DiamondIcon color="primary" />
            <Button style={{ marginLeft: 10 }} href="/token">出金する</Button>
        </div>
    </div>
}