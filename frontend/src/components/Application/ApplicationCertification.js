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
                <h2>Certification</h2>
                <p style={{fontWeight:'bold'}}>Do you certify the following:</p>
                <p>I understand that my application to the University of West Florida is valid only for the semester indicatd and cannot be deffered to another
                    semester.  I also understand and agree that I will be bound by the University's regulations concerning application deadline dates and admission
                    requirements.  I agree to the release of any transcripts and related credentials, including immunication records, standized test scores (GRM, MAT, TOEFL
                    IELTS, etc.), to the University of West Florida; furthermore I authorize the University of West Florida to contact an institution that I have attended
                    for the purpose of confirming receipt of the official records needed to complete my application and discussing an subsequent admission decision.
                </p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: .5, width: '25ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        <TextField required={true}
                            id = {'certify1'}
                            label = {'Do you certify?'}
                            type = {'select'}
                            onChange = {(e) => props.handleSelectChange('certify1', e.target.value)}
                            select
                            value = {props.selects['certify1']}                        
                            >
                                        <MenuItem key={"1"} value={""}>
                                            {""}
                                        </MenuItem>
                                        <MenuItem key={"2"} value={"yes"}>
                                            {"Yes"}
                                        </MenuItem>
                        </TextField>
                    </div>
                </Box><p style={{fontWeight:'bold'}}>Do you certify the following:</p>
                <p>I certify that the information given in this application is complete and accurate, and I understand that to make false or fraudulent 
                    statements within this application or residency statement may result in disciplinary action, denial of admission, and invalidation of
                    credits or degrees earned.  If admitted, I hereby agree to abide by the policies of the Board of Goverenors and the rules and regulations of 
                    the University of West Florida.  Should any of the information I have given charg prior to my entry to the University of West Florida, I shall 
                    immediately notify the Admissions Office
                </p>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: .5, width: '25ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        <TextField required={true}
                            id = {'certify2'}
                            label = {'Do you certify?'}
                            type = {'select'}
                            onChange = {(e) => props.handleSelectChange('certify2', e.target.value)}
                            select
                            value = {props.selects['certify2']}                        
                            >
                                        <MenuItem key={"1"} value={""}>
                                            {""}
                                        </MenuItem>
                                        <MenuItem key={"2"} value={"yes"}>
                                            {"Yes"}
                                        </MenuItem>
                        </TextField>
                    </div>
                </Box>
            </div>
        </FadeInDiv>
    )    
}