import submitButton from '../images/submit.svg'

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
                                required : true                          
                            },
                            {
                                id : 'mName',
                                type : 'password',
                                label : 'Password',
                                required : true
                            },
                            {   //define submit button
                                id: 'submitLogin',
                                image : submitButton,
                                type : 'button',
                                text: 'Login'
                            }

        ]

export const applicationForm = [
                            {   //Label Section
                                id: 'applicantInfo',
                                type : 'label',
                                text : 'Applicant Info'
                                //End Label Section
                            },
                            {
                                id : 'fName',
                                type : 'text',
                                label : 'First Name',
                                required : true                          
                            },
                            {
                                id : 'mName',
                                type : 'text',
                                label : 'Middle Name',
                                required : false
                            },
                            {
                                id : 'lName',
                                type : 'text',
                                label : 'Last Name',
                                required : true
                            },
                            {
                                id : 'dob',
                                type : 'date',
                                label : 'Date of Birth',
                                required : true
                            },
                            {  //Label Section
                                id: 'addressLabel',
                                type : 'label',
                                text : 'Current Address'
                               // End Label Section
                            },
                            {
                                id : 'streetAddress',
                                type : 'text',
                                label : 'Street Address',
                                required : true
                            },
                            {
                                id : 'city',
                                type : 'text',
                                label : 'City',
                                required : true
                            },
                            {
                                id : 'state',
                                type : 'select',
                                label : 'State',
                                required : true,
                                options : [ 
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
                            },
                            {   //define submit button
                                id: 'submitApplication',
                                image : submitButton,
                                type : 'button',
                                text: 'Submit Application'
                            }
                            ]