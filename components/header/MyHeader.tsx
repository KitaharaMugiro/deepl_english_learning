import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@mui/material";
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from "next/link";
import React from "react";
import resumeOrStartStudy from "../../models/process/resumeOrStartStudy";
import { MainListItems, SecondaryMainListItems } from "../dashboard/ListItems";
import HeaderRightMenu from "./HeaderRightMenu";
import classes from "./style.module.css";
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
                    <Typography
                        component="h1" variant="h6" color="inherit"
                        noWrap className={classes.title}>
                        Englister
                    </Typography>
                </Link>

                <HeaderRightMenu />
            </Toolbar>
        </AppBar>

        <Drawer
            open={open}
            onClose={() => setOpen(false)}
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
                />
            </List>
            <Divider />
            <List><SecondaryMainListItems /></List>
        </Drawer>
    </>;
}