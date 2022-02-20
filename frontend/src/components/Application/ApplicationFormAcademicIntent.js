import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import submitButton from '../../images/submit.svg'
import {ceebMap} from "../../dataFiles/selectInfo"
import {academicMastersPrograms, academicDoctoralPrograms} from "../../dataFiles/selectInfo"
import {applicationUnlistedSchools, applicationAddUnlistedSchool, applicationUWFInformation, applicationProgramInfo } from "../../dataFiles/formData"

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function ApplicationFormAcademicIntent(props){
    const useStyles = makeStyles((theme) => ({
        genericForm : {
                    width:'100%',
                    height: '100%',
                    margin: 'auto',
                    marginTop : '10%'
        }
      }));

    const classes = useStyles();

    const getValue = (id, type) => {
        if (type === 'select'){
            return props.selects[id]
        }else{
            return props.academicIntentData[id]
        }
    }

    // function parses through the formData that was passed as a props and renders each form item.
    const renderInputs = (formData) =>{
        return formData.map((line, index) => {
            if (line.type !== 'label'){
                return(
                <div key={index}>
                    {line.type === 'text' ?                        
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        value = {getValue(line.id, line.type)}
                        onChange = {(e) => props.handleInputChange(e.target.value, line.id, 'academicIntent')}
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
                            { line.id === 'academicProgram' ?
                                props.selects.academicLevel === 'doctoral' ?
                                    academicDoctoralPrograms.map((option) => {
                                        return (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                        )
                                        })
                                    :
                                    academicMastersPrograms.map((option) => {
                                        return (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                        )
                                        })

                                
                                :
                                line.options.map((option) => {
                                    return (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                    )
                                    })
                            }
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
                    <div className={classes.genericForm}>
                        {renderInputs(applicationUnlistedSchools)}
                        {props.selects.foundSchool === 'no' ?
                            renderInputs(applicationAddUnlistedSchool)
                        :
                            null
                        }
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
                        {renderInputs(applicationUWFInformation)}
                        {renderInputs(applicationProgramInfo)}
                    </div>
                </Box>
                
            </div>
        </FadeInDiv>
    )    
}