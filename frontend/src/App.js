
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Board from './components/ProgressBoard/Board'
import { loginForm } from './dataFiles/formData'
import {useState} from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend';
import {DndProvider} from "react-dnd";
import Application from "./components/Application/Application"
import Register from './components/Register/Register'

function App() {
  // const [user, setUser] = useState('applicant')  **Not needed yet but will use to control what an applicant can see vs what a committee member can see.
  const [mode, setMode] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [role, setRole] = useState('');
  const [user, setUser] = useState('anthony')
 
  return (
    <div>
      <Header text="Graduate Application System" setMode={setMode} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role}/>
      { isLoggedIn ? 
        <div style={{width:'100%'}}>
        {mode === 'apply' ?
            
            <Application />
          
          : mode === 'review' ?  
          
            <DndProvider backend={HTML5Backend}>
              <Board user={user}/>
            </DndProvider>
          :
          null
        }
        </div>
        : mode === 'register' ?
          <Register />
        : mode === 'login' ?
          <LoginForm formData= {loginForm} mode={mode} setIsLoggedIn={setIsLoggedIn} setMode={setMode} setRole={setRole}/>
        
        : null
      }
    </div>
  );
}

export default App;
