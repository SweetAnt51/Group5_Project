import { useState } from "react";
import Comment from "./Comment";
import { makeStyles } from "@material-ui/core";

function CommentContainer(props){

    const useStyles = makeStyles((theme) => ({
        commentDiv : {
            width:"100%", 
            textAlign:'center',
            maxHeight : '500px',
            overflowY : 'scroll'
        }
      }));
    
    const classes = useStyles();
    
    const renderComments = () => {
        return props.comments.map( (comment, index) => {
            return  <div><Comment comment = {comment.comment} commenter={comment.commenter} user={props.user} index={index}/><br/></div>
        })
    }

    return (
        <div className={classes.commentDiv}>
        <h2>Comments</h2>
            { props.comments.length > 0 ? renderComments() : null}
        </div>
    )
}

export default CommentContainer