import PermMiniDrawerLeft from './components/PermMiniDrawerLeft'
import Header from './components/Header'
import Form from './components/Form'
import { applicationForm, loginForm } from './dataFiles/formData'
import {useState} from 'react'

function App() {
  // const [user, setUser] = useState('applicant')  **Not needed yet but will use to control what an applicant can see vs what a committee member can see.
  const [mode, setMode] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

 
  return (
    <div>
      <Header text="Demo for Testing" setMode={setMode} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      { isLoggedIn ? 
        <div>
        <PermMiniDrawerLeft />
        {mode === 'apply' ?
          <Form formData = {applicationForm} />
          : 
          null
        }
        </div>
        :
        <Form formData= {loginForm} setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
