import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { applicationFormPersonal, applicationFormEducation, applicationTestScores} from '../../dataFiles/formData'
import ApplicationFormPersonal from "./ApplicationFormPersonal";
import ApplicationFormEducation from './ApplicationFormEducation';
import { validatePersonal, validateAcademicIntent } from '../../dataFiles/formValidation';
import ReactDOM from "react-dom";
import ApplicationFormTests from './ApplicationFormTests';
import ApplicationFormAcademicIntent from './ApplicationFormAcademicIntent';
import ApplicationFormUploadDocs from './ApplicationFormUploadDocs';
import ApplicationFormDiscipline from './ApplicationFormDiscipline'
import ApplicationFormCertification from './ApplicationCertification'
import ApplicationFormSignature from './ApplicationFormSignature'


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
    'aria-controls': `vertical-tabpanel-${index}`
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
                                    cert : false,
                                    signature : false
                            });

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
        testType : "",
        foundSchool : "",
        currentlyEnrolled : "",
        academicLevel : "",
        academicProgram : "",
        entryTerm : "",
        fileType : "",
        question1 : "",
        question2 : "",
        question3 : "",
        certify1 : "",
        certify2 : "",
        residency : ""
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
        mobilePhoneNumber : "",
        signature : ""
    })

    const [academicIntentData , setAcademicIntentData] = useState({
        currentUWFId : "",
        unlisted1 : "",
        unlisted2 : "", 
        unlisted3 : ""
    })

    const [uwfId, setUWFID] = useState('')

    const [testScores, setTestScores] = useState([])

    const [uploadedFiles, setUploadedFiles] = useState([])

    const [edTableData, setEdTableData] = useState([])
 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleSelectChange = (name , value) => {
        var newSelects = {...selects};
        newSelects[name] = value;
        
        var newFlags = {...flags}
        if (validatePersonal(personalData, newSelects)){
            newFlags.personal = true;
        }else {
            newFlags.personal = false;
        }
        if (validateAcademicIntent(academicIntentData, newSelects)){
            newFlags.intent = true;
        }else{
            newFlags.intent = false;
        }
        if (newSelects.question1 !== "" && newSelects.question2 !== "" && newSelects.question3 !== ""){
            newFlags.history = true;
        }else{
            newFlags.history = false;
        }
        if (newSelects.certify1 !== "" && newSelects.certify2 !== "" ){
            newFlags.cert = true;
        }else{
            newFlags.cert = false;
        }

        if (newSelects.residency !== '' && personalData.signature !== ""){
            newFlags.signature = true;
        }else {
            newFlags.signature = false;
        }

        ReactDOM.unstable_batchedUpdates(() => {
            setFlags(newFlags)
            setSelects(newSelects);
        });
        
    }

    const handleInputChange = (value, id, form) => {
        console.log(value, id, form)
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
        if (form === 'academicIntent'){
            var newFlags = {...flags}
            var newAcademicData = {...academicIntentData}
            newAcademicData[id] = value
            if (validateAcademicIntent(newAcademicData, selects)){
                newFlags.intent = true;
            }else{
                newFlags.intent = false;
            }
            ReactDOM.unstable_batchedUpdates(() => {
                setAcademicIntentData(newAcademicData)
                setFlags(newFlags)
            });
        }
        if (form === 'signature'){
            console.log(value)
            var newFlags = {...flags}
            var newPersData = {...personalData}
            newPersData[id] = value
            console.log(newPersData)
            if (selects.residency !== '' && newPersData.signature !== ""){
                newFlags.signature = true;
            }else{
                newFlags.signature = false;
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

    const addFile = () => {
        if (selects.fileType === ""){
            alert("File Type Must be Set")
        } else if (document.getElementById('file').value === ''){
            alert('Please Select File to Upload');
        }else {
            let newFiles = [...uploadedFiles]
            let today = new Date().toISOString().slice(0, 10)
            var line = {
                type : selects.fileType,
                file : document.getElementById('file').files,
                submitDate : today
            }
            newFiles.push(line)
            var newFlags = {...flags}
            newFlags.docs = true
            
            ReactDOM.unstable_batchedUpdates(() => {
                setUploadedFiles(newFiles)
                setFlags(newFlags)
            });
        }

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

    const handleSubmitApplication = async (status) => {
        if (selects.foundSchool === 'yes'){
            var additionalSchools = false;
        }else{
            var additionalSchools = true
        }

        var applicationForm = new FormData()

        for (const [key, value] of Object.entries(selects)) {
            applicationForm.append(key, value);
 
        }

        for (const [key, value] of Object.entries(personalData)) {
            applicationForm.append(key, value);

        }
        
        for (const [key, value] of Object.entries(academicIntentData)) {
            applicationForm.append(key, value);

        }

        testScores.forEach(item => {
            applicationForm.append('testScores', item)
        })

        edTableData.forEach(item => {
            applicationForm.append('education', item)
        })

        var fileInfo = []
        uploadedFiles.forEach(item => {
            applicationForm.append('file', item.file[0])
            fileInfo.push({type: item.type, date : item.submitDate, filename: item.file[0].name})
        })
        
        applicationForm.append('fileInfo', JSON.stringify(fileInfo))
        applicationForm.append('status', status)

        await fetch('/submitApplication',{
            method: "POST",
            body: applicationForm
        }).then(res => {
            if (res.status !== 200){
                console.log(res);
                return false;
            }
            return res.json();
        })
 
    }

    const readyToSubmit = () => {
        var ready = true
        for (const [key, value] of Object.entries(flags)) {
            if (value === false){
                ready = false
            }
        }
        return ready;
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
            aria-label="Application Tabs"
            sx={{
                overflow: 'hidden',
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                borderTopColor: 'rgba(0, 0, 0, 0.12)',
                borderBottomColor: 'rgba(0, 0, 0, 0.12)',
                borderLeftColor: 'rgba(0, 0, 0, 0.12)',
                width: '250px',
                minWidth: '250px',
                marginTop: '60px'
            }}
        >
            <Tab label={flags.personal ? "Personal ✅ " : "Personal ❌"} sx={{alignItems:'flex-end'}}{...a11yProps(0)} />
            <Tab label={flags.education ? "Education ✅ " : "Education ❌"} sx={{alignItems:'flex-end'}}{...a11yProps(1)} />
            <Tab label={flags.testScores ? "Test Scores ✅ " : "Test Scores ❌"} sx={{alignItems:'flex-end'}}{...a11yProps(2)} />
            <Tab label={flags.intent ? "Academic Intent ✅ " :  "Academic Intent❌"} sx={{alignItems:'flex-end'}}{...a11yProps(3)} />
            <Tab label={flags.history ? "Disciplinary History ✅ " : "Disciplinary History ❌" }sx={{alignItems:'flex-end'}}{...a11yProps(4)} />
            <Tab label={flags.docs ? "Supporting Docs ✅ " : "Supporting Docs ❌"} sx={{alignItems:'flex-end'}}{...a11yProps(5)} />
            <Tab label={flags.cert ? "Certification ✅ " : "Certification ❌"} sx={{alignItems:'flex-end'}} {...a11yProps(6)} />
            <Tab label={flags.signature ? "Signature ✅ " :  "Signature ❌ "} sx={{alignItems:'flex-end'}} {...a11yProps(7)} />
            {/* {readyToSubmit() ? 
                <Tab label="Review/Submit" sx={{alignItems:'flex-end'}} {...a11yProps(8)} />
                : 
                null
            } */}
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
                                          addTestScore={addTestScore} 
                                          tableData={testScores}
                                          handleSelectChange={handleSelectChange} 
                                          selects={selects}
                                          handleInputChange = {handleInputChange} />
            </AppTab>
            <AppTab value={value} index={3}>
                <ApplicationFormAcademicIntent selects={selects} 
                                               setSelects = {setSelects}
                                               uwfId = {uwfId}
                                               setUWFID = {setUWFID}
                                               handleSelectChange={handleSelectChange}
                                               handleInputChange = {handleInputChange}
                                               academicIntentData = {academicIntentData}
                />
            </AppTab>
            <AppTab value={value} index={4}>
                <ApplicationFormDiscipline selects={selects} 
                                           handleSelectChange={handleSelectChange}

                />
            </AppTab>

            <AppTab value={value} index={5}>
                <ApplicationFormUploadDocs  handleInputChange = {handleInputChange}
                                            addFile = {addFile}
                                            tableData = {uploadedFiles}
                                            handleSelectChange={handleSelectChange}
                                            selects={selects} 
                />
            </AppTab>
            <AppTab value={value} index={6}>
                <ApplicationFormCertification  handleInputChange = {handleInputChange}
                                               handleSelectChange={handleSelectChange}
                                               selects={selects} 
                />
            </AppTab>
            <AppTab value={value} index={7}>
                <ApplicationFormSignature      handleInputChange = {handleInputChange}
                                               handleSelectChange={handleSelectChange}
                                               selects={selects}
                                               personalData ={personalData}
                                               handleSubmitApplication = {handleSubmitApplication}
                                               readyToSubmit = {readyToSubmit}
                />

                
            </AppTab>
            

            
        </Box>
  );
}