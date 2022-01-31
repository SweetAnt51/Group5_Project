import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;


export default function Form(props){
    var formData = props.formData
    const [state, setState] = useState('')

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

    const handleSubmit = (type) => {

        if (type === 'submitLogin'){
            // fetch call for login will go here
            props.setIsLoggedIn(true);
        }

        if (type === 'submitApplication'){
            //fetch call for submit app will go here
            alert('Submit Application Not Implemented Yet.')
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
                    // noValidate
                    autoComplete="off"
                >
                    <div>
                        {renderInputs(formData)}
                    </div>
                </Box>
            </div>
        </FadeInDiv>
    )
}

