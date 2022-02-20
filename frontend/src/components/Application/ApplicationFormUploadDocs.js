import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { applicationAddDocs } from '../../dataFiles/formData'
import UploadedFileTable from './UploadedFileTable'
import { selectClasses } from '@mui/material';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export default function ApplicationFormUploadDocs(props) {
    const useStyles = makeStyles((theme) => ({
        genericForm : {
                    width:'100%',
                    height: '100%',
                    margin: 'auto',
                    marginTop : '10%'
        }
      }));

    const classes = useStyles();

    const renderInputs = (formData) =>{
        return formData.map((line, index) => {
            if (line.type !== 'label'){
                return(
                <div key={index}>
                    {line.type === 'file' ?                        
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        name = {line.name}
                        onChange = {(e) => props.handleInputChange(e.target.value, line.id, 'fileUpload')}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        />
                    :line.type === 'select' ?
                        <TextField required={line.required}
                        id = {line.id}
                        label = {line.label}
                        type = {line.type}
                        value = {props.selects[line.id]}
                        onChange = {(e) => props.handleSelectChange(line.id, e.target.value)}
                        select                       
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
                    line.type === 'button' ?
                        <div>
                            <br/>
                            <img className='submit_icon' id={line.id} type='image' src={line.image} alt={line.text} width='45px' hieght='45px' onClick={() => {props.addFile()}}/>
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

    return(
        <FadeInDiv style={{width:'100%'}}>
            <div style={{   textAlign:'center',
                            margin:'auto',
                            width:'100%',
                            maxWidth:'1000px',
                            minWidth:'400px',
                            display:'flex',
                            justifyContent: 'center'
                        }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '65ch'},
                    }}
                    autoComplete="off"
                    id = 'test'
                >
                    <div className={classes.genericForm}>
                        {renderInputs(applicationAddDocs)}
                        
                    </div>
                </Box>
                
            </div>
            <UploadedFileTable tableData={props.tableData} />
        </FadeInDiv>
    )    


}