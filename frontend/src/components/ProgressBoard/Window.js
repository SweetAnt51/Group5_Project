import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import CommentContainer from "./CommentContainer";
import ModalTools from './ModalTools';
import Grid from "@mui/material/Grid";
import Attachments from "./Attachments";
import ApplicationInfo from "./ApplicationInfo";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item, user }) => {
    const useStyles = makeStyles((theme) => ({
        options: {   
            width:'43%',
            height: '50%',
            marginTop: '70px',
            position:'fixed',
            display: 'flex',
            justifyContent: 'flex-end'
        },
        modal : {
            backgroundColor: '#F4F5F7',
            borderRadius: '4px',
            margin: 'auto',
            height:'90%',
            minHeight: '450px',
            width: '85%',
            maxWidth: '2000px',
            minWidth: '1200px',
            outline: 'none',
            padding: '20px',
            overflowY: 'scroll',
        },
        ovelay : {
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }, 
        attachmentDiv : {
            width:"100%", 
            textAlign:'center',
            minHeight : '800px',
            overflowY : 'scroll'
        }
      }));
    
    const classes = useStyles();

    const [comments, setComments] = useState([])
    const [viewComments, setViewComments] = useState(true)
    const [viewAttachments, setViewAttachments] = useState(false)

    const handleViewComments = () => {
        if (viewComments){
            setViewComments(false);

        }else {
            setViewComments(true);
        }
    }

    const handleViewAttachments = () => {
        if (viewAttachments){
            setViewAttachments(false);

        }else {
            setViewAttachments(true);
        }
    }

    useEffect( async() => {
        console.log('starting comment fetch');
        var formData =  new FormData()
        formData.append('id', item.id)
        await fetch('/get_comments',{
            method: "POST",
            body: formData
            }).then(res => {
                if (res.status !== 200){
                    console.log(res);
                    return false;
                }
              return res.json();
          }).then(data => {
              setComments(data)
              console.log('comment fetch success')
          });
    }, []);

    useEffect( () => {
        console.log('re-render')
    }, [comments])

    function prepend(value, array) {
        var newArray = array.slice();
        newArray.unshift(value);
        console.log(newArray)
        return newArray;
    }

    const addComment = () => {
        let line = {
            comment : " ",
            commenter : user
        };
        setComments(prepend(line, [...comments]));
        setViewComments(true);      
    }

    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={classes.modal}
            overlayClassName={classes.overlay}
        >   

            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={7} >   
                        <ApplicationInfo item={item} />
                    </Grid>
                    <Grid item xs={4} >  
                        <ModalTools handleViewComments={handleViewComments}
                                    handleViewAttachments = {handleViewAttachments}
                                    addComment={addComment}/>
                    </Grid>
                </Grid>
            </Box>
            { viewComments ?
                <CommentContainer comments={comments} user={user}/>
                :
                null
            }
            { viewAttachments ?
                <Attachments />
                :
                null
            }
        </Modal>
    );
};

export default Window;