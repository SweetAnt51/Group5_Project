
import { useDarkMode } from './styles/UseDarkTheme';
import PermMiniDrawerLeft from './components/PermMiniDrawerLeft'
import Header from './components/Header'
import {useState} from 'react'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [user, setUser] = useState('applicant')

 
  return (
    <div>
      {user == 'applicant' ?
        <Header text="Demo for Testing"/>
        : null
      }
      <PermMiniDrawerLeft theme={theme}/>

    </div>
  );
}

export default App;
