import DashboardIcon from '@mui/icons-material/Dashboard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ForumIcon from '@mui/icons-material/Forum';
import TranslateIcon from '@mui/icons-material/Translate';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Link from 'next/link';
import React from 'react';
import NoteIcon from '@mui/icons-material/Note';
interface Props {
    closeMenu: () => void;
}
export const MainListItems = (props: Props) => {
    return (
        <div>
            {/* <Link href="/today">
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <CelebrationIcon />
                    </ListItemIcon>
                    <ListItemText primary="今日の英語年齢診断" />
                </ListItem>
            </Link> */}


            <Link href="/dashboard" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="ダッシュボード" />
                </ListItem>
            </Link>

            {/* <Link href="/restudy" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="解いた問題" />
                </ListItem>
            </Link> */}

            <Link href="/mynote" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="マイノート" />
                </ListItem>
            </Link>

            <Link href="/phrase" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <TranslateIcon />
                    </ListItemIcon>
                    <ListItemText primary="フレーズ" />
                </ListItem>
            </Link>


            {/* <Link href="/quest" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <LightbulbIcon />
                    </ListItemIcon>
                    <ListItemText primary="クエスト" />
                </ListItem>
            </Link> */}

            <Link href="/info/discord" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Englister Community" />
                </ListItem>
            </Link>
        </div>
    )
}

export const SecondaryMainListItems = () => {
    return (
        <div>
            {/* <ListSubheader inset>Saved reports</ListSubheader> */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScbacRgBLm8sw_s28KEQOJWUqB5M8mV4xFBt3Br25WM2KpKuA/viewform?usp=sf_link">
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Questionリクエスト" />
                </ListItem>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiBErG8O7zFEZYlODFk4p27GjwbFjV4ehp9SO8OZ3cffuMcA/viewform?usp=sf_link">
                <ListItem button >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="追加機能リクエスト" />
                </ListItem>
            </Link>
        </div>);
}