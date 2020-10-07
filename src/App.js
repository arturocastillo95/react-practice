import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter'

export const ThemeSelector = React.createContext()

function App() {

  const [theme, setTheme] = useState('red')
  
  return (
    <>

    <ThemeSelector.Provider value={{ backgroundColor: theme}}>
      <Counter initialCount={0}/>
      
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })} >Change Theme</button>

    </ThemeSelector.Provider>

    </>
  );
}

export default App;
