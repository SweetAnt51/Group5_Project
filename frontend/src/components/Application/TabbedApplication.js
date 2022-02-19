// import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { applicationFormPersonal, applicationFormEducation, applicationTestScores} from '../../dataFiles/formData'
import ApplicationFormPersonal from "./ApplicationFormPersonal";
import ApplicationFormEducation from './ApplicationFormEducation';
import { validatePersonal } from '../../dataFiles/formValidation';
import { convertLength } from '@mui/material/styles/cssUtils';
import ReactDOM from "react-dom";
import ApplicationFormTests from './ApplicationFormTests';


function AppTab(props){
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width:'100%'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,
                    width:'95%',
                    display:'flex',
                    justifyContent : 'center' }}>
          {children}
        </Box>
      )}
    </div>  );
}

AppTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    };
}



export default function TabbedApplication(props) {
    const [value, setValue] = useState(0);
    const [flags, setFlags] = useState({
                                    personal : false,
                                    education : false, 
                                    testScores : false,
                                    intent : false,
                                    history : false,
                                    docs : false,
                                    cert : false
                            });
    const [edTableData, setEdTableData] = useState([])
    const [selects, setSelects] = useState({
        edState : "",
        edCountry : "",
        degree : "",
        state : "",
        prefix : "",
        addressType : "",
        country : "",
        gender : "",
        language : "",
        testType : ""
    })
    const [personalData, setPersonalData] = useState({
        fName : "",
        mName : "",
        lName : "",
        dob : "",
        language : "",
        addressType : "",
        streetAddress : "",
        city : "",
        zipCode : "",       
        homePhoneNumber : "",
        mobilePhoneNumber : ""
    })

    const [testScores, setTestScores] = useState([])
    const [academicIntent, setAcademicIntent] = useState({

    })


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleSelectChange = (name , value) => {
        var newSelects = {...selects};
        newSelects[name] = value;
        setSelects(newSelects);
    }

    const handleInputChange = (value, id, form) => {
        if (form === 'personal'){
            var newFlags = {...flags}
            var newPersData = {...personalData}
            newPersData[id] = value
                if (validatePersonal(newPersData, selects)){
                    newFlags.personal = true;
                }else {
                    newFlags.personal = false;
                }
            ReactDOM.unstable_batchedUpdates(() => {
                setPersonalData(newPersData)
                setFlags(newFlags)
            });
        }     
        
    }

    const addEducation = () => {
        let newEd = [...edTableData]
        let line = {
            ceeb : document.getElementById('ceeb').value,
            institution : document.getElementById('institution').value,
            city : document.getElementById('city').value,
            state : selects.edState,
            country : selects.edCountry,
            startDate : document.getElementById('dateStarted').value,
            endDate : document.getElementById('dateEnded').value,
            degree : selects.degree,
        }
        newEd.push(line)
        var newFlags = {...flags}
        newFlags.education = true
        
        ReactDOM.unstable_batchedUpdates(() => {
            setEdTableData(newEd)
            setFlags(newFlags)
        });
        
    }

    const addTestScore = () => {
        let newTests = [...testScores]
        let line = {
            testType : selects.testType,
            testDate : document.getElementById('testDate').value,
            totalScore : document.getElementById('totalScore').value,
            verbalScore : document.getElementById('verbalScore').value,
            quantativeScore : document.getElementById('quantitativeScore').value,
            awaScore : document.getElementById('awaScore').value,
            intReasoning : document.getElementById('intReasoning').value
        };

        newTests.push(line);
        

        document.getElementById('testDate').value = ''
        document.getElementById('totalScore').value = ''
        document.getElementById('verbalScore').value = ''
        document.getElementById('quantitativeScore').value = ''
        document.getElementById('awaScore').value = ''
        document.getElementById('intReasoning').value = ''

        var newFlags = {...flags}
        newFlags.testScores = true
        
        ReactDOM.unstable_batchedUpdates(() => {
            setTestScores(newTests)
            setFlags(newFlags)
        });

    }

    return (
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
        <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
                overflow: 'hidden',
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                borderTopColor: 'rgba(0, 0, 0, 0.12)',
                borderBottomColor: 'rgba(0, 0, 0, 0.12)',
                borderLeftColor: 'rgba(0, 0, 0, 0.12)',
                width: '300px',
                marginTop: '60px'
            }}
        >
            <Tab label={flags.personal ? "Personal ✅ " : "Personal ❌"} {...a11yProps(0)} />
            <Tab label={flags.education ? "Education ✅ " : "Education ❌"} {...a11yProps(1)} />
            <Tab label={flags.testScores ? "Test Scores ✅ " : "Test Scores ❌"} {...a11yProps(3)} />
            <Tab label="Academic Intent" {...a11yProps(4)} />
            <Tab label="Disciplinary History" {...a11yProps(4)} />
            <Tab label="Supporting Docs" {...a11yProps(5)} />
            <Tab label="App Certification" {...a11yProps(6)} />
            <Tab label="Signature" {...a11yProps(7)} />
            <Tab label="Review" {...a11yProps(8)} />
        </Tabs>
        {/* {renderAppTabs(props.applicationForm)} */}
            <AppTab value={value} index={0}>
                <ApplicationFormPersonal formData = {applicationFormPersonal} 
                                         flags={flags} setFlags={setFlags} 
                                         selects={selects} 
                                         handleSelectChange={handleSelectChange} 
                                         handleInputChange = {handleInputChange} 
                                         personalData ={personalData}
                                         setPersonalData = {setPersonalData}/>
            </AppTab>

            <AppTab value={value} index={1}>
                <ApplicationFormEducation formData = {applicationFormEducation} 
                                          flags={flags} 
                                          setFlags={setFlags} 
                                          addEducation={addEducation} 
                                          tableData={edTableData}
                                          handleSelectChange={handleSelectChange} 
                                          selects={selects}
                                          handleInputChange = {handleInputChange} />
            </AppTab>
            <AppTab value={value} index={2}>
                <ApplicationFormTests formData = {applicationTestScores} 
                                        //   flags={flags} 
                                        //   setFlags={setFlags} 
                                          addTestScore={addTestScore} 
                                          tableData={testScores}
                                          handleSelectChange={handleSelectChange} 
                                          selects={selects}
                                          handleInputChange = {handleInputChange} />
            </AppTab>
        
        </Box>
  );
}