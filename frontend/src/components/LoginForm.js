import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { validateApplication, validateLogIn, validateRegistration } from '../dataFiles/formValidation';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function LoginForm(props){
    var formData = props.formData

    const useStyles = makeStyles((theme) => ({
        login: {   
            width:'100%',
            height: '100%',
            margin: 'auto',
            marginTop : '15%'
            // display:'flex',
        },
        pendingApproval : {
            color:'red', 
            textAlign:'center', 
            width:'100%', 
            margin:'auto', 
            marginTop:'50%'
        },
        failedLogin : {
            color:'red', 
            textAlign:'center'
        },
        rootDiv : {
            textAlign:'center',
            margin:'auto',
            width:'85%',
            maxWidth:'800px',
            minWidth:'400px'
        }
      }));
    
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        userName : "",
        pw : ""
    });
    const [failedLogin, setFailedLogin] = useState(false);
    const [pendingApproval, setPendingApproval] = useState(false);

    const getValue = (id) => {
        return formValues[id];
    }

    const handleInputChange = (value, id) => {
        let newValues = {...formValues};
        newValues[id] = value;
        setFormValues(newValues);
    }

    // function parses through the formData that was passed as a props and renders each form item.
    const renderInputs = (formData) =>{
        return formData.map((line, index) => {
            if (line.type !== 'label'){
                return(
                <div key={index}>
                    {line.type === 'text' || line.type === 'password' ?
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        value = {getValue()}
                        onChange = {(e) => handleInputChange(e.target.value, line.id)}
                        />
                    : line.type === 'button' ?
                        <div>
                            <br/>
                            <img className='submit_icon' id={line.id} type='image' src={line.image} alt={line.text} width='45px' hieght='45px' onClick={() => {handleSubmit()}}/>
                        </div>           
                    :                    
                    null
                }
                    
                </div>
                    
                )
            }else{
                return(
                    <div key={index} >
                        <h2 id={line.id} style={{fontSize:'14px'}}>{line.text} </h2>
                    </div>
                    
                )
            }
        })
    }

    const handleSubmit = async() => {
        if (validateLogIn()){
            var formData = new FormData() //this object will be sent to the backend.  Can be read in as a dictionary.
            formData.append('username', formValues.userName)
            formData.append('password', formValues.pw)
            // fetch call for login will go here
            await fetch('/login',{
                method: "POST",
                body: formData
            }).then(res => {
                if (res.status !== 200){
                    console.log(res);
                    return false;
                }
                return res.json();
            }).then(logInObject => {
                if (!logInObject){
                    // setIsError(true);
                    alert('There has been an error.');
                }else{
                    if (!logInObject.authorized){
                        setFailedLogin(true)
                    } else if (!logInObject.approvedFaculty){
                        setPendingApproval(true)
                    }else{
                        if (logInObject.role === 'faculty' || logInObject.role === 'chair'){
                            var mode = 'review'
                        }else {
                            mode = 'apply'
                        }
                        ReactDOM.unstable_batchedUpdates(() => {
                            setFailedLogin(true)
                            props.setIsLoggedIn(true) 
                            props.setMode(mode)
                            props.setRole(logInObject.role)
                            
                        });
                    }
                }
            });
        }
    }

    return(
        <FadeInDiv>
            <div className={classes.rootDiv}>
                {pendingApproval ? 
                    <p className={classes.pendingApproval}>Your account is pending approval.  Please check back later.</p>
                    : 
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '45ch' },
                        }}
                        autoComplete="off"
                        id = 'test'
                    >
                        <div className={classes.login}>
                            {renderInputs(formData)}
                        </div>
                        {failedLogin ? 
                        <p className={classes.failedLogin}>Username and/or Password is Incorrect</p>
                            : 
                            null
                        }
                    </Box>
                }
                </div>
        </FadeInDiv>
    )
}