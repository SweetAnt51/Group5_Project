import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {disciplinaryHistory} from '../../dataFiles/formData'

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function ApplicationFormDiscipline(props){
    const useStyles = makeStyles((theme) => ({
        genericForm : {
                    width:'100%',
                    height: '100%',
                    margin: 'auto',
                    marginTop : '0px',
                    marginBottom: '10px'
        }
      }));

    const classes = useStyles();

    // function parses through the formData that was passed as a props and renders each form item.
    const renderInputs = (formData) =>{
        return formData.map((line, index) => {
            if (line.type !== 'label'){
                return(
                <div key={index}>
                    {line.type === 'select' ?
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        onChange = {(e) => props.handleSelectChange(line.id, e.target.value)}
                        select
                        value = {props.selects[line.id]}                        
                        >
                            { line.options.map((option) => {
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
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}>
                <h2>Disciplinary History</h2>
                <p>**NOTE: Applicants are not required to disclose a conviction or charges which were expunged or sealed by the court.  Applicants are not required to disclose traffic citations with result in only a fine.</p>
                <p>Have you ever been charged with a violation of the law that resulted in a conviction, whether or not adjudication was withheld?</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: .5, width: '25ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        {renderInputs(disciplinaryHistory[0])}
                    </div>
                </Box>

                <p>Have you ever been charged with a violation of the law that is still pending and could result in probation, community service, a jail sentence, or the revocation or suspension of your driver's license?</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '25ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        {renderInputs(disciplinaryHistory[1])}
                    </div>
                </Box>
                <p>Are currently, or have you ever been charged with or subject to a disciplinary action for academic or any other type of misconduct at any education institution?</p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '25ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        {renderInputs(disciplinaryHistory[2])}
                    </div>
                </Box>
            </div>
        </FadeInDiv>
    )    
}