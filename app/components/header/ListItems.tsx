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
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface Props {
    closeMenu: () => void;
}
export const MainListItems = (props: Props) => {
    return (
        <div>
            <Link href="/dashboard" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="ダッシュボード" />
                </ListItem>
            </Link>



            <Link href="/mynote" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <NoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="マイノート" />
                </ListItem>
            </Link>

            <Link href="/diary" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="英語日記" />
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

export const SecondaryMainListItems = (props: Props) => {
    return (
        <div>
            {/* <ListSubheader inset>Saved reports</ListSubheader> */}
            <Link href="/news">
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary="更新情報" />
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
            <Link href="https://forms.gle/pwiMEtTBWNc1SdKu7">
                <ListItem button >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="データ復旧依頼" />
                </ListItem>
            </Link>
        </div>);
}