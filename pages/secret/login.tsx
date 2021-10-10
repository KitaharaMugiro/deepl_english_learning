import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link, Box } from "@material-ui/core"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { ApiClientSecret } from "../../api/ApiClientSecret"
import { SecretApi } from "../../api/SecretApi"
import { LocalStorageHelper } from "../../models/localstorage/LocalStorageHelper"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export default () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    useEffect(() => {
        const user = LocalStorageHelper.getSecretUserId()
        if (user) {
            router.push("/secret")
        }
    }, [])

    const login = async () => {
        try {
            const foundUser = await SecretApi.login(username, password)
            LocalStorageHelper.saveSecretUserId(foundUser.userId)
            router.push("/secret")
        } catch {
            console.log("ログイン失敗")
        }

    }

    const onChangeTextField = (text: string, type: string) => {
        if (type === "username") {
            setUsername(text)
        } else if (type === "password") [
            setPassword(text)
        ]
    }

    return (
        <Container component="main" maxWidth="xs" >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: "30px"
            }}>
                <Avatar style={{
                    margin: "10px",
                    backgroundColor: "rgb(220, 0, 78)"

                }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <div style={{
                    width: '100%', // Fix IE 11 issue.
                    marginTop: "10px"
                }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={username}
                        onChange={(e) => onChangeTextField(e.target.value, "username")}
                        label="ユーザ名"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={(e) => onChangeTextField(e.target.value, "password")}
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: "3px 0px 2px" }}
                        onClick={login}
                    >
                        ログイン
                    </Button>
                </div>
            </div>
        </Container >)
}
