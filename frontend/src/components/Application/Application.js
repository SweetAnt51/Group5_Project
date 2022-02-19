import React from 'react'
import { applicationForm } from '../../dataFiles/formData'
import TabbedApplication from './TabbedApplication'


const Application = (props) => {


    return (
        <div style={{textAlign:'center', width:'95%', margin:'auto'}}>
            <TabbedApplication applicationForm = {applicationForm} />
        </div>
    )
}

export default Application