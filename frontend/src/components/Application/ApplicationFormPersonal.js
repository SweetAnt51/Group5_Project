import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function Form(props){
    var formData = props.formData

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

    const handleChange = () => {
        
    }


    const getValue = (id, type) => {
        if (type === 'select'){
            return props.selects[id]
        }else{
            return props.personalData[id]
        }
     }

    // function parses through the formData that was passed as a props and renders each form item.
    const renderInputs = (formData) =>{
        return formData.map((line, index) => {
            if (line.type !== 'label'){
                return(
                <div key={index}>
                    {line.type === 'text' || line.type === 'number' ?
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        value = {getValue(line.id, line.type)}
                        onChange = {(e) => props.handleInputChange(e.target.value, line.id, 'personal')}
                        />
                    : line.type === 'date' ? 
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        value = {getValue(line.id, line.type)}
                        onChange = {(e) => props.handleInputChange(e.target.value, line.id, 'personal')}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        />
                    :line.type === 'select' ?
                    
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        onChange = {(e) => props.handleSelectChange(line.id, e.target.value)}
                        select
                        value = {getValue(line.id, line.type)}                        
                        >
                            {line.options.map((option) => {
                                return (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                )
                                })}
                        </TextField>

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

    return(
        <FadeInDiv style={{width:'100%'}}>
            <div style={{   textAlign:'center',
                            margin:'auto',
                            width:'100%',
                            maxWidth:'1000px',
                            minWidth:'400px',
                            display:'flex'
                        }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '45ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={props.mode === 'login' ? classes.login : classes.genericForm}>
                        {renderInputs(formData[0])}
                    </div>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '45ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        {renderInputs(formData[1])}
                    </div>
                </Box>
            </div>
        </FadeInDiv>
    )
}

