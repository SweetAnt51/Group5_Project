
import { useDarkMode } from './styles/UseDarkTheme';
import PermMiniDrawerLeft from './components/PermMiniDrawerLeft'
import Header from './components/Header'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  
  return (
    <div>
      <Header text="Demo for Testing"/>
      <PermMiniDrawerLeft theme={theme}/>
    </div>
  );
}

export default App;
