import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useEffect } from "react";
import { StudyApi } from "../../api/StudyApi";
import { UserApi } from "../../api/UserApi";
import { LeftHeartsAtom } from "../../models/jotai/LeftHearts";
import { LocalStorageHelper } from "../../models/localstorage/LocalStorageHelper";
import usePlan from "../../models/util-hooks/usePlan";
import useSignin from "../../models/util-hooks/useSignin";
import useUser from "../../models/util-hooks/useUser";
import LeftHearts from "../hearts/LeftHearts";

export default () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { user, loadingUser } = useUser()
    const { openSignin } = useSignin()
    const { openPlanModal } = usePlan()
    const { planName, maxHearts } = usePlan()

    const [leftHearts, setLeftHearts] = useAtom(LeftHeartsAtom)


    useEffect(() => {
        const getLeftHearts = async () => {
            const { leftHeart } = await StudyApi.leftHeart();
            setLeftHearts(leftHeart)
        }
        getLeftHearts()
    }, [])

    const onClickChangePlan = async () => {
        openPlanModal()
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = async () => {
        try {
            await UserApi.signin()
            LocalStorageHelper.clearStudySessionId()
            LocalStorageHelper.clearUserId()
            await Auth.signOut();
            window.location.href = "/"
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if (loadingUser) return <div />
    if (user) {
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
                <div style={{ padding: 5 }}>

                    <Typography variant="subtitle2">
                        <Tooltip title="毎日18:00回復" placement="top-start">
                            <span>残りライフ</span>
                        </Tooltip>
                    </Typography>

                    <Grid container alignItems="center" justifyContent="center" >
                        <LeftHearts
                            hearts={leftHearts} maxHearts={maxHearts}
                            showText={true} />
                    </Grid>
                </div>

                <Link href="/dashboard">
                    <a rel="noreferrer">
                        <MenuItem href="/dashboard" onClick={handleClose} >ダッシュボード</MenuItem>
                    </a>
                </Link>
                <MenuItem onClick={onClickChangePlan} ><b>{planName}</b> プラン変更</MenuItem>

                <MenuItem onClick={signOut}>ログアウト</MenuItem>
            </Menu>
        </div >
    } else {
        return <Button
            onClick={openSignin}
            //href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link"
            style={{ marginRight: 20, textTransform: "none" }} size="small" variant="contained" disableElevation>
            Log in
        </Button>
    }

}