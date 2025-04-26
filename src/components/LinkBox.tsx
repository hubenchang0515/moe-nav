"use client";
import { LINKS } from "@/config";
import { Box, Link, Paper, Typography } from "@mui/material";

export interface LinkProps {
    label: string;
    url: string;
    color?: string;
}

export interface LinkGroup {
    label: string;
    color?: string;
    items: LinkProps[];
}

export default function LinkBox() {
    return (
        <Paper sx={[{borderRadius:1, padding:2, display:'flex', flexDirection:'column', gap:2, backgroundColor:'rgba(255,255,255,0.7)'}, (theme)=>theme.applyStyles('dark', {backgroundColor:'rgba(0,0,0,0.7)'})]}>
            {/* <Typography>申请收录</Typography> */}
            {
                LINKS.map((group, index) => {
                    return (
                        <Box key={index} sx={{display:'flex', gap:2}}>
                            <Typography color={group.color??'primary'} sx={{whiteSpace:'nowrap', width:'4em', textAlign:'center'}}>{ group.label }</Typography>
                            <Box 
                                sx={{
                                    display:'flex', 
                                    gap:1, 
                                    flexFlow:'wrap', 
                                    '& > *:not(:last-child)::after': {
                                        content: '" / "',
                                        textDecoration: 'none'
                                    }
                                }}
                            >
                            {
                                group.items.map((item, index) => {
                                    return <span><Link key={index} color={item.color??'inherit'} underline='hover' href={item.url} target="_blank" >{item.label}</Link></span>
                                })
                            }
                            </Box>
                        </Box>
                    )
                })
            }
        </Paper>
    )
}