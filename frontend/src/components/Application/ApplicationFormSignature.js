import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import submitButton from '../../images/submit.svg'

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
                <h2>Residency Determination</h2>
                <p>Tuition cost is based on a students residency classification which is defined by s.1009.21</p>
                <p>Please indicate the tpye of Residency you are seeking.  Learn more about residency at uwf.edu/residency</p>
                <p> *Florida / Alabama residents, select your code, then upon admission to the university, you will be required to complete a 
                    residency affidavit and provide supporting documents.
                </p>
                <p> *Non-Residents, please indicate that you have read the "Non-Florida Residents Acknowlegement" section to continue.</p>

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
                            id = {'residency'}
                            label = {'Select Your Residency'}
                            type = {'select'}
                            onChange = {(e) => props.handleSelectChange('residency', e.target.value)}
                            select
                            value = {props.selects['residency']}                        
                            >
                                        <MenuItem key={"1"} value={""}>
                                            {""}
                                        </MenuItem>
                                        <MenuItem key={"2"} value={"florida"}>
                                            {"Florida Resident"}
                                        </MenuItem>
                                        <MenuItem key={"2"} value={"alabama"}>
                                            {"Alabama Resident"}
                                        </MenuItem>
                                        <MenuItem key={"2"} value={"nonResident"}>
                                            {"Non-Resident"}
                                        </MenuItem>
                        </TextField>
                    </div>
                </Box><p style={{fontWeight:'bold'}}>Do you certify the following:</p>
                <h2>Signature</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: .5, width: '45ch', marginRight:'60px' },
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        <TextField required={true}
                            id = {'signature'}
                            label = {'Please Type Your Full Legal Name'}
                            type = {'text'}
                            onChange = {(e) => props.handleInputChange(e.target.value, e.target.id, e.target.id)}
                            value = {props.personalData['signature']}                        
                            >
                        </TextField>
                    </div>
                    { props.readyToSubmit() ? 
                        <div style={{width:'100%', margin:'auto', textAlign:'left'}}>
                             <div >
                                <h2 style={{fontSize:'14px'}}>Click the Icon Below to Submit Your Application</h2>
                            </div>
                            <br/>
                            <img className='submit_icon' id={'submit'} type='image' src={submitButton} alt={'submitApp'} width='45px' hieght='45px' onClick={() => props.handleSubmitApplication('submit')}/>
                        </div> 
                        :
                        null
                    }
                </Box>
            </div>
        </FadeInDiv>
    )    
}