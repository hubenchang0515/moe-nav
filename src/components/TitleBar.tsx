import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import React from "react";

import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface TitleBarProps {
    title: string
    url: string

    theme: Mode;
    onToggleTheme: (theme:Mode|null) => void;
}

type Mode = "light" | "dark" | "system";

function themeName(theme:Mode) {
    switch (theme) {
        case 'light': return '明亮';
        case 'dark': return '黑暗';
        case 'system': return '系统';
    }
}

function themeIcon(theme:Mode) {
    switch (theme) {
        case 'light': return <LightModeIcon/>;
        case 'dark': return <DarkModeIcon/>;
        case 'system': return <BrightnessAutoIcon/>;
    }
}

function nextTheme(theme:Mode) {
    switch (theme) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        case 'system': return 'light';
    }
}

export default function TitleBar(props:TitleBarProps) {
    
    return (
        <Box>
            <AppBar component="nav" color="primary" elevation={0} sx={[{backgroundColor:'rgba(255,255,255,0.0)'}, (theme)=>theme.applyStyles('dark', {backgroundColor:'rgba(0,0,0,0.0)'})]}>
                <Toolbar>

                    <Box sx={{ flexGrow: 1 }} />

                    <Tooltip title={themeName(props.theme)} placement="bottom" arrow>
                        <IconButton color="inherit" onClick={() => {props.onToggleTheme(nextTheme(props.theme)!);}}>
                            { themeIcon(props.theme) }
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={themeName(props.theme)} placement="bottom" arrow>
                        <IconButton color="inherit" href={props.url} target="_blank">
                            <GitHubIcon/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}