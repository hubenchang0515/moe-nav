"use client"
import { Divider, IconButton, InputBase, MenuItem, Paper, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent, useCallback, useState } from "react";
import { SEARCH_ENGINES } from "@/config";

export interface SearchEngine {
    label: string;
    icon?: string;
    action: (text:string)=>void;
}


export default function SearchBox() {
    const [engine, setEngine] = useState(0);
    const [text, setText] = useState('');
    const search = useCallback((ev:FormEvent) => {
        SEARCH_ENGINES[engine].action(text);
        ev.preventDefault();
    }, [engine, text]);

    return (
        <Paper
            component="form"
            sx={[
                { display: 'flex', alignItems: 'center', width:'100%', backgroundColor:'rgba(255,255,255,0.7)'},
                (theme)=>theme.applyStyles('dark', {backgroundColor:'rgba(0,0,0,0.7)'})
            ]}
            onSubmit={search}
        >
            <Select 
                sx={{
                    padding:'0 4px', 
                    width: '8em',
                    borderRadius:0,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                }} 
                value={engine}
                onChange={(ev)=>setEngine(ev.target.value as number)}
            >
                {
                    SEARCH_ENGINES.map((item, index) => {
                        return <MenuItem key={index} value={index}>{item.label}</MenuItem>
                    })
                }
            </Select>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={text}
                onChange={(ev)=>{setText(ev.target.value)}}
                
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}