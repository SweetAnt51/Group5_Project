
export const validateRegistration = (req) => {
    if (document.getElementById('pw1').value !== document.getElementById('pw2').value){
        alert('Passwords Entered Do Not Match');
        return false
    }else if(document.getElementById('fname').value === '' || document.getElementById('lname').value === '' ||
             document.getElementById('email').value === '' || document.getElementById('userName').value === ''
            ){
        alert('Please Fill Out All Sections');
        return false
    }else if (!req.length || !req.number || !req.lowerCase || !req.upperCase || !req.specialChar || !req.match){
        alert('Password Does Not Meet Requirements');
        return false;
    }else {
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

export const validatePersonal = (pers, selects) => {
    if (
        pers.fName === "" ||
        pers.mName === "" || 
        pers.lName === "" || 
        selects.gender === "" || 
        pers.dob === "" || 
        selects.language === "" || 
        selects.addressType === "" || 
        pers.streetAddress === "" || 
        pers.city === "" || 
        selects.state === "" || 
        pers.zipCode === "" ||
        selects.country === "" || 
        pers.homePhoneNumber === "" || 
        pers.mobilePhoneNumber === "" 
    ){
        console.log(false)
        return false
    }else{
        console.log('true')
        return true
    }
}

