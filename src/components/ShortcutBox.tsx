"use client";
import { Grid, Button, Paper } from "@mui/material"
import Shortcut from "./Shortcut"
import { SHORTCUTS } from "@/config"
import AddIcon from '@mui/icons-material/Add';

export default function ShortcutBox() {
    return (
        <Paper sx={[{borderRadius:1, backgroundColor:'rgba(255,255,255,0.7)'}, (theme)=>theme.applyStyles('dark', {backgroundColor:'rgba(0,0,0,0.7)'})]}>
            <Grid container columns={24} spacing={2}>
                {
                    SHORTCUTS.map((item, index)=>{
                        return (
                            <Grid key={index} size={{xs:6, md:4, lg:3}}>
                                <Shortcut label={item.label} icon={item.icon} url={item.url}/>
                            </Grid>
                        )
                    })
                }
                <Grid size={{xs:6, md:4, lg:3}}>
                    <Button sx={{width:'100%', height:'100%'}}>
                        <AddIcon/>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}