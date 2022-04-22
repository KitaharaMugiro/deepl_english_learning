import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"
import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    onClickEdit: () => void
    onClickDelete: () => void
}

export default (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClickEdit = () => {
        props.onClickEdit()
        setAnchorEl(null)
    }

    const onClickDelete = () => {
        props.onClickDelete()
        setAnchorEl(null);
    };

    return <>
        <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={onClickEdit}>
                <ListItemIcon>
                    <ModeEditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem onClick={onClickDelete}>
                <ListItemIcon >
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText >Delete</ListItemText>
            </MenuItem>
        </Menu>
    </>
}