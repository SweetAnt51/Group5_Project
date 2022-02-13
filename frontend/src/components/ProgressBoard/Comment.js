import { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Comment(props) {
    const useStyles = makeStyles((theme) => ({
        commentLabel : {
                    display:'inline-block', 
                    textAlign:"left", width:"60%", 
                    margin:'auto',
                    left:'10px',
                    marginBottom:'3px', 
                    fontStyle: 'italic'
        },
        editButton : {
                    cursor:'pointer', 
                    display:'inline-block', 
                    textAlign:"right", 
                    marginRight:'10px',
                    fontSize: '18px'
        },
        commentArea : {
                    width:'60%', 
                    textAlign:'left', 
                    margin:'auto', 
                    borderRadius:'10px'
        }
      }));
    
    const classes = useStyles();
    const [commentText, setCommentText] = useState("")
    const [save, setSave] = useState(false)

    const commentChange = (e) => {
        setCommentText(e.target.value)
        setSave(true)
    }
    
    const handleSaveComment = () => {
        alert('not implemented yet') 
        setSave(false)
    }

    useEffect( () => {
        setCommentText(props.comment)
    },[props.comment])
    

    return (
        <div key={props.index} >
            <label className={classes.commentLabel}>{"@" + props.commenter[0].toUpperCase() + props.commenter.substring(1)}</label>
            { props.commenter === props.user ?
            // <label onClick={() => editComment()} className={classes.editButton}>📝</label>
            <TextField
                value = {commentText}
                multiline
                className={classes.commentArea}
                minRows = {2}
                maxRows = {4}
                onChange = {(e) => commentChange(e)}
            />
            : 
            <TextField
                value = {commentText}
                multiline
                className={classes.commentArea}
                minRows = {2}
                maxRows = {4}
                disabled
            />
            }
            {save ?
                <Button className={classes.commentArea} variant="contained" onClick={() => handleSaveComment()}>Save</Button>
            :
            null
            }
        </div>
    )
}

export default Comment