import { IconButton, Menu, MenuItem, Button } from "@mui/material"
import Link from "next/link"
import useUser from "../../models/util-hooks/useUser"
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from "react";
import { Auth } from "aws-amplify";
import useSignin from "../../models/util-hooks/useSignin";

export default () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const { openSignin } = useSignin()
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            window.location.href = "/"
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }


    const { user, loadingUser } = useUser()
    const renderSigninOrOutButton = () => {
        if (loadingUser) return <div />
        if (user) {
            //return <Button color="inherit" onClick={signOut}>Logout</Button>
            return <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link href="/dashboard">
                        <a rel="noreferrer">
                            <MenuItem href="/dashboard" onClick={handleClose} >ダッシュボード</MenuItem>
                        </a>
                    </Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiBErG8O7zFEZYlODFk4p27GjwbFjV4ehp9SO8OZ3cffuMcA/viewform">
                        <a rel="noreferrer">
                            <MenuItem href="/dashboard" onClick={handleClose} >プラン変更</MenuItem>
                        </a>
                    </Link>
                    <MenuItem onClick={signOut}>ログアウト</MenuItem>
                </Menu>
            </div>
        } else {
            return <Button
                // onClick={openSignin}
                style={{ marginRight: 20, textTransform: "none" }} size="small" variant="contained" disableElevation>
                Log in(未実装)
            </Button>
        }
    }

    return renderSigninOrOutButton()
}