import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link';

interface Props {
    onClickStartStudy: () => void
    onClickDashboard: () => void
    onClickPay: () => void
}

export const MainListItems = (props: Props) => {
    return (
        <div>
            <ListItem button onClick={props.onClickStartStudy}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="勉強を再開する" />
            </ListItem>
            <ListItem button onClick={props.onClickDashboard}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="ダッシュボード" />
            </ListItem>
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
                    <ListItemText primary="有料版" />
                </ListItem>
            </Link>
            {/* <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem> */}
        </div>
    )
}

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);