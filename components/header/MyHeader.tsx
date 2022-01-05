import { AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useRouter } from 'next/dist/client/router';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
import classes from "./style.module.css";
import resumeOrStartStudy from "../../models/process/resumeOrStartStudy";
import { MainListItems } from "../dashboard/ListItems";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from "next/link"
export default () => {
    const router = useRouter()
    const [open, setOpen] = React.useState(false);
    const startStudy = async () => {
        await resumeOrStartStudy()
        router.push("/question/1_question")
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return <>
        <AppBar position="absolute" color="transparent"
            style={{ height: 60 }}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    size="large">
                    <MenuIcon />
                </IconButton>

                <Link href="/">
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Englister
                    </Typography>
                </Link>

                {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
            </Badge>
        </IconButton> */}

            </Toolbar>
        </AppBar>

        <Drawer
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose} size="large">
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <MainListItems
                    onClickStartStudy={startStudy}
                    onClickDashboard={() => router.push("/dashboard")}
                    onClickPay={() => window.alert("未実装です")}
                />
            </List>
            {/* <Divider />
    <List>{secondaryListItems}</List> */}
        </Drawer>
    </>;
}