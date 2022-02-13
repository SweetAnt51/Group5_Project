import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { validateApplication, validateLogIn, validateRegistration } from '../dataFiles/formValidation';
import { makeStyles } from '@material-ui/core/styles';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function Form(props){
    var formData = props.formData
    const [state, setState] = useState('')

    const useStyles = makeStyles((theme) => ({
        login: {   
                    width:'100%',
                    height: '100%',
                    margin: 'auto',
                    marginTop : '15%'
                    // display:'flex',
        },
        genericForm : {
                    width:'100%',
                    height: '100%',
                    margin: 'auto',
                    marginTop : '10%'
        }
      }));
    
    const classes = useStyles();

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
                        />
                    : line.type === 'select' ?
                    
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        select
                        value = {line.id === 'state' ?
                                    state
                                :
                                null
                                }
                        onChange = {line.id === 'state' ?
                                        (e) => setState(e.target.value)
                                    :
                                    null
                                    }
                        
                        >
                            {line.options.map((option) => {
                                return (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                )
                                })}
                        </TextField>

                    : line.type === 'button' ?
                        <div>
                            <br/>
                            <img className='submit_icon' id={line.id} type='image' src={line.image} alt={line.text} width='45px' hieght='45px' onClick={() => {handleSubmit(line.id)}}/>
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

    const getFormValues = (formName) => { //function returns a FormData object for all inputs with the parameter name.
        var formValues = new FormData();  //this object will be sent to the backend.  Can be read in as a dictionary.
        let inputArray = document.getElementsByName('login')
        inputArray.forEach(element => {
            formValues.append(element.id, element.value)
        });

        return formValues
    }

    const handleSubmit = (type) => {

        if (type === 'submitLogin'){
            if (validateLogIn()){
                var data = getFormValues('login') //this object will be sent to the backend.  Can be read in as a dictionary.
                // fetch call for login will go here
                if (document.getElementById('userName').value === 'anthony' || document.getElementById('userName').value === 'jean' || document.getElementById('userName').value === 'dan' || document.getElementById('userName').value === 'raymond') {
                    props.setIsLoggedIn(true);
                    props.setRole('reviewer')
                    props.setMode('review')
                }else{
                    props.setIsLoggedIn(true);
                    props.setRole('applicant')
                    props.setMode('apply')
                }
            }
        }

        if (type === 'submitApplication'){
            if (validateApplication()){
                var data = getFormValues('app') //this object will be sent to the backend.  Can be read in as a dictionary.
                //fetch call for submit app will go here
                alert('Submit Application Not Implemented Yet.')
            }
        }
        
        if (type === 'submitRegistration'){
            if (validateRegistration()){
                var data = getFormValues('register') //this object will be sent to the backend.  Can be read in as a dictionary.
                //fetch call for register will go here
                alert('Registeration Not Implemented Yet.')
            }
        }
    }

    return(
        <FadeInDiv>
            <div style={{   textAlign:'center',
                            margin:'auto',
                            width:'85%',
                            maxWidth:'800px',
                            minWidth:'400px'
                        }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '45ch' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={props.mode === 'login' ? classes.login : classes.genericForm}>
                        {renderInputs(formData)}
                    </div>
                </Box>
            </div>
        </FadeInDiv>
    )
}

