import submitButton from '../images/submit.svg'

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
                                id : 'dob',
                                type : 'date',
                                label : 'Date of Birth',
                                required : true,
                                name : 'app'
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
                                        ],
                                name : 'app'
                            },
                            {   //define submit button
                                id: 'submitApplication',
                                image : submitButton,
                                type : 'button',
                                text: 'Submit Application'
                            }
                            ]