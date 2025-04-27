"use client";
import SearchBox from "@/components/SearchBox";
import ShortcutBox from "@/components/ShortcutBox";
import { Box, Container, IconButton, Paper, useColorScheme } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LinkBox from "@/components/LinkBox";
import { useState } from "react";
import TitleBar from "./TitleBar";
import Card from "./Card";

export default function MainPage() {
    const {mode, setMode} = useColorScheme();
    const [showLinks, setShowLinks] = useState(false);
    return (
        <Box 
            sx={{
                display: 'flex', 
                flexDirection:'column', 
                height:'100%', 
                overflow:'hidden',
                background: "url(https://www.dmoe.cc/random.php)", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <TitleBar title="萌萌导航" url="https://github.com/hubenchang0515/moe-nav" theme={mode??'system'} onToggleTheme={setMode}/>
            <Box 
                sx={{
                    width: '100%', 
                    flex:1,
                    display: 'flex',
                    flexDirection:'column',
                    overflow:'hidden',
                    gap:1,
                }}
            >
                <Container 
                    maxWidth='lg' 
                    sx={{
                        marginTop: showLinks ? 0 : '40vh', 
                        display:'flex', 
                        flexDirection:'column', 
                        justifyContent:'center',
                        gap:2,
                        transition:'all 500ms ease',
                    }}
                >
                    <SearchBox/>
                    <ShortcutBox/>
                </Container>
                
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Card>
                        <IconButton color="primary" onClick={()=>setShowLinks(!showLinks)}>
                            {showLinks ? <KeyboardDoubleArrowDownIcon/> : <KeyboardDoubleArrowUpIcon/>}
                        </IconButton>
                    </Card>
                </Box>

                <Container maxWidth='lg' sx={showLinks ? {marginTop: 0, marginBottom:1, flex:1, transition:'all 500ms ease', overflow:'auto'} : {marginTop:'100vh', transition:'all 500ms ease'}}>
                    <LinkBox/>
                </Container>
            </Box>
        </Box>
    );
}
