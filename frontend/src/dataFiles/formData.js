import submitButton from '../images/submit.svg'

const stateOptions = [ 
                        { value: '',
                            label : '',
                        },
                        { value: 'ak',
                        label : 'AK',
                        },
                        { value: 'ca',
                        label : 'CA',
                        },
                        {
                        value : 'fl',
                        label : 'FL',
                        }
                    ]

const countryOptions = [ 
                        { value: '',
                            label : '',
                        },
                        { value: 'united states',
                        label : 'United States',
                        },
                        { value: 'canada',
                        label : 'Canada',
                        },
                        {
                        value : 'united kingdom',
                        label : 'United Kingdom',
                        }
                    ]

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
                                options : [
                                    { value : '',
                                      label : ""    
                                    },
                                    { value : 'english',
                                      label : "English"    
                                    }
                                ]
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
                                options : stateOptions,
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
                                options : countryOptions,
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
                                        type : 'text',
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
                                        options : stateOptions,
                                        name : 'app'
                                    }],
                                    [
                                    {
                                        id : 'edCountry',
                                        type : 'select',
                                        label : 'Country',
                                        required : true,
                                        options : countryOptions,
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
                                [{   //Label Section
                                    id: 'testScoresLabel',
                                    type : 'label',
                                    text : 'Add Test Scores'
                                    //End Label Section
                                },
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