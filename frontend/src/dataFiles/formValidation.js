

export const validateRegistration = () => {
    if (document.getElementById('pw1').value !== document.getElementById('pw2').value){
        alert('Passwords Entered Do Not Match');
        return false
    }else if(document.getElementById('pw1').value === '' || document.getElementById('pw2').value === '' ||
             document.getElementById('fname').value === '' || document.getElementById('lname').value === '' ||
             document.getElementById('email').value === ''
            ){
        alert('Please Fill Out All Sections');
        return false
    }else{
        return true
    }
}

export const validateLogIn = () => {
    if (document.getElementById('pw').value === '' || document.getElementById('userName').value === ''){
        alert('Please Provide Both Username and Password');
        return false;
    }else{
        return true;
    }
}

export const validateApplication = () => {
    //ensure form is completely filled out here.  return false if not filled out completely.
    return true
}