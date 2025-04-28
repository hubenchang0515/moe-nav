import { Badge, Button, Zoom } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export interface ShortcutProps {
    label: string;
    url: string;
    icon: string;
    brief?: string;
    removeMode?: boolean;
    onRemove?: ()=>void;
}

export default function Shortcut(props:ShortcutProps) {
    const onRemove = (ev:React.MouseEvent) => {
        props.onRemove?.();
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    return (
        <Zoom in={true}>
            <Button href={props.url} target="_blank" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:1}} onClick={props.removeMode ? onRemove : undefined}>
                <Badge color={props.removeMode ? "error" : undefined} badgeContent={props.removeMode ? <CloseIcon fontSize="small"/> : <></>}>
                    <img src={props.icon||`${new URL(props.url).origin}/favicon.ico`} alt={props.label} width={32} height={32}/>
                </Badge>
            </Button>
        </Zoom>
    )
}