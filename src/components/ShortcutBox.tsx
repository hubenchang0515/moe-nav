"use client";
import { Grid, Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import Shortcut, { ShortcutProps } from "./Shortcut"
import Card from "./Card";

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";

export interface ShortcutBoxProps {
    shortcuts: ShortcutProps[];
    removeMode?: boolean;
    onRemove?: (index:number)=>void;
    onClickAdd?: ()=>void;
    onClickRemove?: ()=>void
}

export default function ShortcutBox(props:ShortcutBoxProps) {
    const [anchor, setAnchor] = useState<HTMLElement|null>(null);

    const onClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(ev.currentTarget);
    }
    const onClose = () => {
        setAnchor(null)
    }

    const onClickAdd = (ev:React.MouseEvent) => {
        props.onClickAdd?.();
        ev.stopPropagation();
        setAnchor(null);
    }

    const onClickRemove = (ev:React.MouseEvent) => {
        props.onClickRemove?.();
        ev.stopPropagation();
        setAnchor(null);
    }

    return (
        <Card>
            <Grid container columns={{ xs: 4, md: 8, lg:12 }}>
                {
                    props.shortcuts.map((item, index)=>{
                        return (
                            <Grid key={index} size={1}>
                                <Shortcut label={item.label} icon={item.icon} url={item.url} removeMode={props.removeMode} onRemove={()=>props.onRemove?.(index)}/>
                            </Grid>
                        )
                    })
                }
                <Grid size={1}>
                    <Button sx={{width:'100%', height:'48px'}} onClick={onClick}>
                        <SettingsIcon/>
                    </Button>
                    <Menu open={anchor !== null} anchorEl={anchor} onClose={onClose}>
                        <MenuItem onClick={onClickAdd}>
                            <ListItemIcon><AddIcon/></ListItemIcon>
                            <ListItemText>Add</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={onClickRemove}>
                            <ListItemIcon><DeleteIcon/></ListItemIcon>
                            <ListItemText>Remove</ListItemText>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Card>
    )
}