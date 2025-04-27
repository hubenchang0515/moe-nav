import { Paper } from "@mui/material";
import React from "react";

export interface CardProps {
    children?: React.ReactNode;
}

export default function Card(props:CardProps) {
    return (
        <Paper sx={[{backgroundColor:'rgba(255,255,255,0.7)'}, (theme)=>theme.applyStyles('dark', {backgroundColor:'rgba(0,0,0,0.7)'})]}>
            { props.children }
        </Paper>
    )
}