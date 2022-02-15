import { TextField, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { AtomNameWithPersistence } from "../../models/jotai/StudyJotai"

export default () => {

    const [name, setName] = useAtom(AtomNameWithPersistence)

    return <div>
        {/* <Typography variant="h4">今日の英語年齢診断</Typography>
        <div style={{ height: 20 }} /> */}
        <Typography variant="h5">名前を入れてください</Typography>
        <div style={{ height: 10 }} />
        <TextField
            placeholder="表示名"
            value={name}
            fullWidth
            onChange={(e) => setName(e.target.value)} />
    </div>
}

