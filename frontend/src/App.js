
import Header from './components/Header'
import Form from './components/Form'
import Board from './components/ProgressBoard/Board'
import { applicationForm, loginForm, registerForm } from './dataFiles/formData'
import {useState} from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend';
import {DndProvider} from "react-dnd";
import Application from "./components/Application/Application"

function App() {
  // const [user, setUser] = useState('applicant')  **Not needed yet but will use to control what an applicant can see vs what a committee member can see.
  const [mode, setMode] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState('');
 
  return (
    <div>
      <Header text="Demo for Testing" setMode={setMode} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role}/>
      { isLoggedIn ? 
        <div>
        {mode === 'apply' ?
            
            <Application />
          
          : mode === 'review' ?  
          
            <DndProvider backend={HTML5Backend}>
              <Board />
            </DndProvider>
          :
          null
        }
        </div>
        : mode === 'register' ?
          <Form formData= {registerForm} />
        : mode === 'login' ?
          <Form formData= {loginForm} mode={mode} setIsLoggedIn={setIsLoggedIn} setMode={setMode} setRole={setRole}/>
        
        : null
      }
    </div>
  );
}

export default App;
