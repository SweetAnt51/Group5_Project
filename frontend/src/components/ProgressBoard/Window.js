import React from "react";
import Modal from "react-modal";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCommentIcon from '@mui/icons-material/AddComment';



Modal.setAppElement("#root");

const Window = ({ show, onClose, item }) => {
    const useStyles = makeStyles((theme) => ({
        options: {   
                    width:'43%',
                    height: '50%',
                    marginTop: '70px',
                    position:'fixed',
                    display: 'flex',
                    justifyContent: 'flex-end'
        },
      }));
    
    const classes = useStyles();
    
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >   
            <div className={classes.options}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => alert('not implemented')}>
                            <ListItemIcon>
                                <AttachFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Attachements" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => alert('not implemented')}>
                            <ListItemIcon>
                                <AddCommentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Comment" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => alert('not implemented')}>
                            <ListItemIcon>
                                <VisibilityIcon />
                            </ListItemIcon>
                            <ListItemText primary="View Comments" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Application ID</h2>
                <p>{item.app_id}</p>
                <h2>Major</h2>
                <p>{item.major}</p>
                <h2>Status</h2>
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
            </div>

        </Modal>
    );
};

export default Window;