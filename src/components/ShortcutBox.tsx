"use client";
import { Grid, Button, Paper } from "@mui/material"
import Shortcut from "./Shortcut"
import { SHORTCUTS } from "@/config"
import AddIcon from '@mui/icons-material/Add';
import Card from "./Card";

export default function ShortcutBox() {
    return (
        <Card>
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
        </Card>
    )
}