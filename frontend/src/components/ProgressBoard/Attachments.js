import { TextField } from "@mui/material"
import { MenuItem } from "@mui/material"
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";

function Attachements(props){

    const useStyles = makeStyles((theme) => ({
        attachmentDiv : {
            width:"100%", 
            textAlign:'center',
            minHeight : '800px',
            overflowY : 'scroll'
        },
        select : {
            minWidth : '200px'
        }
      }));
    
    const classes = useStyles();

    const [attachment, setAttachment] = useState('')
 
    return(
        <div className={classes.attachmentDiv}>
                    <h2>Attachments</h2>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField required='false'
                            id = "attachment"
                            label = 'Select Attachment'
                            select
                            value = {attachment}
                            onChange = {(e) => setAttachment(e.target.value)}
                            className = {classes.select}
                            >
                            <MenuItem key={1} value={''}></MenuItem>
                            <MenuItem key={2} value={'cover'}>Cover Letter</MenuItem>
                            <MenuItem key={3} value={'transcript'}>Transcript</MenuItem>
                            <MenuItem key={4} value={'resume'}>Resume</MenuItem>
                        </TextField>
                    </Box>
                </div>
    )
}

export default Attachements