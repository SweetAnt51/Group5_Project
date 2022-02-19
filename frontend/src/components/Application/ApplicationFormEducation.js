import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
// import { validatePersonal } from '../../dataFiles/formValidation';
import { makeStyles } from '@material-ui/core/styles';
import EducationTable from './EducationTable';
import submitButton from '../../images/submit.svg'

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function ApplicationFormEducation(props) {
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



    const getValue = (id) => {
        if(id === 'edState'){
            return props.selects.edState
        }
        if(id === 'edCountry'){
            return props.selects.edCountry
        } 
        if(id === 'degree'){
            return props.selects.degree
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
                        onChange = {() => props.handleInputChange()}
                        />
                    : line.type === 'date' ? 
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        onChange = {() => props.handleInputChange()}
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
                        value = {getValue(line.id)}                        
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
                    <div className={props.mode === 'login' ? classes.login : classes.genericForm}>
                        {renderInputs(formData[1])}
                    </div>
                </Box>
                
            </div>
            <div>
                    <br/>
                    <img className='submit_icon' id={'addEducation'} type='image' src={submitButton} alt={'addEducation'} width='45px' height='45px' onClick={() => props.addEducation()}/>
                </div>   
            <div>
                <EducationTable tableData={props.tableData} />
            </div>
        </FadeInDiv>
    )
}

