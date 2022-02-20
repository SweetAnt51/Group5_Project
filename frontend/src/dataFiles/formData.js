import submitButton from '../images/submit.svg'
import { stateSelections, languageSelections, countrySelections, academicPrograms } from './selectInfo'


export const registerForm = [
                            {   //Label Section
                                id: 'regiter',
                                type : 'label',
                                text : 'Please Enter Your Information'
                                //End Label Section
                            },
                            {
                                id : 'fname',
                                type : 'text',
                                label : 'First Name',
                                required : true,
                                name : 'register'                                                         
                            },
                            {
                                id : 'lname',
                                type : 'text',
                                label : 'Last Name',
                                required : true,
                                name : 'register'                     
                            },
                            {
                                id : 'email',
                                type : 'text',
                                label : 'Email Address',
                                required : true,
                                name : 'register'                          
                            },
                            {
                                id : 'userName',
                                type : 'text',
                                label : 'Username',
                                required : true,
                                name : 'register'                          
                            },
                            {
                                id : 'pw1',
                                type : 'password',
                                label : 'Password',
                                required : true,
                                name : 'register'
                            },
                            {
                                id : 'pw2',
                                type : 'password',
                                label : 'Re-enter Password',
                                required : true,
                                name : 'register'
                            },
                            {   //define submit button
                                id: 'submitRegistration',
                                image : submitButton,
                                type : 'button',
                                text: 'Login'
                            }
                        
                        ]

export const loginForm = [
                            {   //Label Section
                                id: 'login',
                                type : 'label',
                                text : 'Please Enter Your Username and Password'
                                //End Label Section
                            },
                            {
                                id : 'userName',
                                type : 'text',
                                label : 'Username',
                                required : true,
                                name : 'login'                         
                            },
                            {
                                id : 'pw',
                                type : 'password',
                                label : 'Password',
                                required : true,
                                name : 'login' 
                            },
                            {   //define submit button
                                id: 'submitLogin',
                                image : submitButton,
                                type : 'button',
                                text: 'Login'
                            }

        ]

export const applicationFormPersonal = [[
                            {   //Label Section
                                id: 'applicantInfo',
                                type : 'label',
                                text : 'Name'
                                //End Label Section
                            },
                            {
                                id : 'prefix',
                                type : 'select',
                                label : 'PreFix',
                                required : true,
                                options : [ 
                                    { value: '',
                                        label : '',
                                    },
                                    { value: 'mr',
                                      label : 'Mr.',
                                    },
                                    { value: 'ms',
                                      label : 'Ms.',
                                    },
                                    {
                                      value : 'mrs',
                                      label : 'Mrs.',
                                    },
                                    {
                                      value : 'none',
                                      label : 'None/Other',
                                    }
                                ],
                                name : 'app'                       
                            },
                            {
                                id : 'fName',
                                type : 'text',
                                label : 'First Name',
                                required : true,
                                name : 'app'                       
                            },
                            {
                                id : 'mName',
                                type : 'text',
                                label : 'Middle Name',
                                required : false,
                                name : 'app'
                            },
                            {
                                id : 'lName',
                                type : 'text',
                                label : 'Last Name',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'gender',
                                type : 'select',
                                label : 'Gender',
                                required : true,
                                name : 'app',
                                options : [ 
                                    { value: '',
                                        label : '',
                                    },
                                    { value: 'male',
                                      label : 'Male',
                                    },
                                    { value: 'female',
                                      label : 'Female',
                                    },
                                    {
                                      value : 'na',
                                      label : 'Decline to Answer',
                                    }
                                ],
                            },
                            {
                                id : 'dob',
                                type : 'date',
                                label : 'Date of Birth',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'language',
                                type : 'select',
                                label : 'Native Language',
                                required : true,
                                name : 'app',
                                options : languageSelections
                            }],[
                            {  //Label Section
                                id: 'addressLabel',
                                type : 'label',
                                text : 'Current Address'
                               // End Label Section
                            },
                            {
                                id : 'addressType',
                                type : 'select',
                                label : 'Address Type',
                                required : true,
                                options : [
                                    {
                                        value: '',
                                        label : ''
                                    },
                                    {
                                        value : 'permanent',
                                        label : 'Permanent Residence'
                                    }
                                ],
                                name : 'app'
                            },
                            {
                                id : 'streetAddress',
                                type : 'text',
                                label : 'Street Address',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'city',
                                type : 'text',
                                label : 'City',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'state',
                                type : 'select',
                                label : 'State',
                                required : true,
                                options : stateSelections,
                                name : 'app'
                            },
                            {
                                id : 'zipCode',
                                type : 'number',
                                label : 'Zip Code',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'country',
                                type : 'select',
                                label : 'Country',
                                required : true,
                                options : countrySelections,
                                name : 'app'
                            },
                            {  //Label Section
                                id: 'contactLabel',
                                type : 'label',
                                text : 'Contact Information'
                               // End Label Section
                            },
                            {
                                id : 'homePhoneNumber',
                                type : 'number',
                                label : 'Home Phone',
                                required : true,
                                name : 'app'
                            },
                            {
                                id : 'mobilePhoneNumber',
                                type : 'number',
                                label : 'Mobile Phone',
                                required : true,
                                name : 'app'
                            },
                            // {   //define submit button
                            //     id: 'submitApplication',
                            //     image : submitButton,
                            //     type : 'button',
                            //     text: 'Submit Application'
                            // }
                            ]]

export const applicationFormEducation =  [
                                    [
                                    {
                                        id : 'ceeb',
                                        type : 'number',
                                        label : 'CEEB',
                                        required : true,
                                        name : 'app'
                                    },
                                    {
                                        id : 'institution',
                                        type : 'text',
                                        label : 'Institution',
                                        required : true,
                                        name : 'app'
                                    },
                                    {
                                        id : 'city',
                                        type : 'text',
                                        label : 'City',
                                        required : true,
                                        name : 'app'
                                    },
                                    {
                                        id : 'edState',
                                        type : 'select',
                                        label : 'State',
                                        required : true,
                                        options : stateSelections,
                                        name : 'app'
                                    }],
                                    [
                                    {
                                        id : 'edCountry',
                                        type : 'select',
                                        label : 'Country',
                                        required : true,
                                        options : countrySelections,
                                        name : 'app'
                                    },
                                    {
                                        id : 'dateStarted',
                                        type : 'date',
                                        label : 'Start Date',
                                        required : true,
                                        name : 'app'
                                    },
                                    {
                                        id : 'dateEnded',
                                        type : 'date',
                                        label : 'End Date',
                                        required : true,
                                        name : 'app'
                                    },
                                    {
                                        id : 'degree',
                                        type : 'select',
                                        label : 'Degree Obtained',
                                        required : true,
                                        options : [
                                            {value : "",
                                             label : ""
                                            },
                                            {value : "none",
                                            label : "None"
                                            },
                                            {value : "associates",
                                            label : "Associates"
                                            },
                                            {value : "bachelors",
                                            label : "Bachelors"
                                            },
                                            {value : "masters",
                                            label : "Masters"
                                            },
                                            {value : "phd",
                                            label : "PhD"
                                            }
                                        ],
                                        name : 'app'
                                    },
                                ]]

export const applicationTestScores =  [
                                [
                                {
                                    id : 'testType',
                                    type : 'select',
                                    label : 'Test Type',
                                    required : true,
                                    options : [
                                        { value : '',
                                          label : ''
                                        },
                                        {
                                          value : 'gmat',
                                          label : 'GMAT'
                                        }
                                    ],
                                    name : 'app'
                                },
                                {
                                    id : 'testDate',
                                    type : 'date',
                                    label : 'Date Taken',
                                    required : true,
                                }],
                                [
                                {
                                    id : 'totalScore',
                                    type : 'number',
                                    label : 'Total',
                                    required : true,
                                },
                                {
                                    id : 'verbalScore',
                                    type : 'number',
                                    label : 'Verbal',
                                    required : true,
                                },
                                {
                                    id : 'quantitativeScore',
                                    type : 'number',
                                    label : 'Quantitative',
                                    required : true,
                                },
                                {
                                    id : 'awaScore',
                                    type : 'number',
                                    label : 'AWA',
                                    required : true,
                                },
                                {
                                    id : 'intReasoning',
                                    type : 'number',
                                    label : 'Integrated Reasoning',
                                    required : true,
                                },
                                {   //define add button
                                    id: 'addTest',
                                    image : submitButton,
                                    type : 'button',
                                    text: 'Add Test Score'
                                }
                            ]]

export const applicationForm = [
                                applicationFormPersonal,
                                applicationFormEducation,
                                applicationTestScores
                                ]

export const applicationUnlistedSchools = [
                                {   //Label Section
                                    id: 'unlistedSchools',
                                    type : 'label',
                                    text : 'Unlisted Schools'
                                    //End Label Section
                                },
                                {
                                    id : 'foundSchool',
                                    type : 'select',
                                    label : 'Did you find your school on the previous page?',
                                    required : true,
                                    options : [
                                        { value : 'yes',
                                        label : 'Yes'
                                        },
                                        {
                                        value : 'no',
                                        label : 'No'
                                        }
                                    ],
                                    name : 'app'
                                }]

export const applicationAddUnlistedSchool = [
                                    {   //Label Section
                                        id: 'addUnlistedSchool',
                                        type : 'label',
                                        text : 'Enter Unlisted Schools'
                                        //End Label Section
                                    },
                                    {
                                        id : 'unlisted1',
                                        type : 'text',
                                        label : 'Unlisted School Name 1',
                                        required : false,
                                        name : 'app'
                                    },
                                    {
                                        id : 'unlisted2',
                                        type : 'text',
                                        label : 'Unlisted School Name 2',
                                        required : false,
                                        name : 'app'
                                    },
                                    {
                                        id : 'unlisted3',
                                        type : 'text',
                                        label : 'Unlisted School Name 3',
                                        required : false,
                                        name : 'app'
                                    },
                                ]

export const applicationUWFInformation = [
                                {   //Label Section
                                    id: 'uwfInfo',
                                    type : 'label',
                                    text : 'UWF Information'
                                    //End Label Section
                                },
                                {
                                    id : 'currentlyEnrolled',
                                    type : 'select',
                                    label : 'Are You Currently Enrolled at UWF?',
                                    required : true,
                                    options : [
                                        { value : '',
                                        label : ''
                                        },
                                        { value : 'yes',
                                        label : 'Yes'
                                        },
                                        {
                                        value : 'no',
                                        label : 'No'
                                        }
                                    ],
                                    name : 'app'
                                },
                                {
                                    id : 'currentUWFId',
                                    type : 'text',
                                    label : 'If yes, enter your current UWF ID',
                                    required : false,
                                    name : 'app'
                                }]

export const applicationProgramInfo = [
                                {   //Label Section
                                    id: 'programInfo',
                                    type : 'label',
                                    text : 'Application Program Information'
                                    //End Label Section
                                },
                                {
                                    id : 'academicLevel',
                                    type : 'select',
                                    label : 'Academic Level Applying For',
                                    required : true,
                                    options : [
                                        { value : '',
                                        label : ''
                                        },
                                        { value : 'masters',
                                        label : 'Masters'
                                        },
                                        {
                                        value : 'doctoral',
                                        label : 'Doctoral'
                                        }
                                    ],
                                    name : 'app'
                                },
                                {
                                    id : 'academicProgram',
                                    type : 'select',
                                    label : 'Academic Program Applying For',
                                    required : true,
                                    options : [],
                                    name : 'app'
                                },
                                {
                                    id : 'entryTerm',
                                    type : 'select',
                                    label : 'Entry Term',
                                    required : true,
                                    options : [
                                        { value : '',
                                        label : ''
                                        },
                                        { value : '2022_fall',
                                        label : '2022 (fall)'
                                        },
                                        {
                                        value : '2023_spring',
                                        label : '2023 (Spring)'
                                        }
                                    ],
                                    name : 'app'
                                },
                                ]

export const applicationAddDocs = [
                                {   //Label Section
                                    id: 'addDocs',
                                    type : 'label',
                                    text : 'Add Supporting Documents'
                                    //End Label Section
                                },
                                {
                                    id : 'fileType',
                                    type : 'select',
                                    label : 'Type of File',
                                    required : true,
                                    options : [
                                        { value : '',
                                        label : ''
                                        },
                                        { value : 'transcript',
                                        label : 'Transcript'
                                        },
                                        {
                                        value : 'loi',
                                        label : 'Letter of Intent'
                                        },
                                        {
                                        value : 'resume',
                                        label : 'Resume'
                                        }
                                    ],
                                    name : 'app'
                                },
                                {
                                    id : 'file',
                                    type : 'file',
                                    label : 'Select File',
                                    required : true,
                                },
                                {   //define add button
                                    id: 'addFile',
                                    image : submitButton,
                                    type : 'button',
                                    text: 'Add File to Application'
                                }
]

export const  disciplinaryHistory = [[{    
                                        id : 'question1',
                                        type : 'select',
                                        label : 'Conduct Question 1',
                                        required : true,
                                        options : [
                                            { value : '',
                                            label : ''
                                            },
                                            { value : 'yes',
                                            label : 'Yes'
                                            },
                                            {
                                            value : 'no',
                                            label : 'No'
                                            }
                                        ],
                                        name : 'app'
                                    }],[{
                                        id : 'question2',
                                        type : 'select',
                                        label : 'Conduct Question 2',
                                        required : true,
                                        options : [
                                            { value : '',
                                            label : ''
                                            },
                                            { value : 'yes',
                                            label : 'Yes'
                                            },
                                            {
                                            value : 'no',
                                            label : 'No'
                                            }
                                        ],
                                        name : 'app'
                                    }],
                                    [{
                                        id : 'question3',
                                        type : 'select',
                                        label : 'Conduct Question 3',
                                        required : true,
                                        options : [
                                            { value : '',
                                            label : ''
                                            },
                                            { value : 'yes',
                                            label : 'Yes'
                                            },
                                            {
                                            value : 'no',
                                            label : 'No'
                                            }
                                        ],
                                        name : 'app'
                                    }
                                ]]