import { useState} from "react";
import RegisterForm from "./RegisterForm";
import PasswordRequirements from "./PasswordRequirements";
import { registerForm } from '../../dataFiles/formData'

export default function Register(props) {

    const [req, setReq] = useState({
        length : false,
        lowerCase : false,
        upperCase : false,
        specialChar : false,
        number : false
    })

    return(
        <div style={{}}>
            <RegisterForm formData={registerForm} req={req} setReq={setReq}/>
            <PasswordRequirements req={req}/>
        </div>
    )
}