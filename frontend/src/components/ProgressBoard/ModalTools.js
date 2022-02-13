import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { makeStyles } from '@material-ui/core/styles';

function ModalTools(props){

    const useStyles = makeStyles((theme) => ({
        div : {
            marginTop: '-40px',
            display : 'flex',
            justifyContent : 'right',
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => props.handleViewAttachments()}>
                        <ListItemIcon>
                            <AttachFileIcon />
                        </ListItemIcon>
                        <ListItemText primary="View Attachments" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => props.addComment()}>
                        <ListItemIcon>
                            <AddCommentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Comment" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => props.handleViewComments()}>
                        <ListItemIcon>
                            <VisibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="View Comments" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default ModalTools