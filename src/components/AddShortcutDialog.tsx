import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField } from "@mui/material";
import { ShortcutProps } from "./Shortcut";
import { FormEvent, useEffect, useState } from "react";

export interface AddShortcutDialogProps {
    shortcuts?: ShortcutProps[];
    open?: boolean;
    onAdd?:(url:string, label:string, icon:string)=>void;
    onClose?: ()=>void;
}

export default function AddShortcutDialog(props:AddShortcutDialogProps) {
    const [url, setUrl] = useState('');
    const [label, setLabel] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        setUrl('');
        setLabel('');
        setIcon('');
    }, [props.open]);

    const onSubmit = (ev:FormEvent) => {
        props.onAdd?.(url, label, icon);
        ev.preventDefault();
        props.onClose?.();
    }

    return (
        <Dialog open={!!props.open} onClose={props.onClose} fullWidth maxWidth='sm'>
            <Paper component='form' onSubmit={onSubmit}>
                <DialogTitle>添加</DialogTitle>
                <DialogContent>
                    <TextField required id="standard-basic" label="地址" variant="standard" fullWidth value={url} onChange={(ev)=>setUrl(ev.target.value)}/>
                    <TextField id="standard-basic" label="标注" variant="standard" fullWidth value={label} onChange={(ev)=>setLabel(ev.target.value)}/>
                    <TextField id="standard-basic" label="图标" variant="standard" fullWidth value={icon} onChange={(ev)=>setIcon(ev.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>取消</Button>
                    <Button type="submit" variant="contained">确认</Button>
                </DialogActions>
            </Paper>
        </Dialog>
    )
}