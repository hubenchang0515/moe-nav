import { Button } from "@mui/material";

export interface ShortcutProps {
    label: string;
    url: string;
    icon: string;
    brief?: string;
}

export default function Shortcut(props:ShortcutProps) {
    return (
        <Button href={props.url} target="_blank" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:1}}>
            <img src={props.icon} width={48} height={48}/>
        </Button>
    )
}