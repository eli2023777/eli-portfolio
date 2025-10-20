import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesC from './components/RoutesC';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, createContext } from 'react';

export const GeneralContext = createContext();


function App() {
  const { i18n } = useTranslation();


  const savedIsDark = localStorage.getItem('isDark') === 'true';
  const [isDark, setIsDark] = useState(savedIsDark);

  useEffect(() => {
    const dir = i18n.language === "he" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Dark Mode
  useEffect(() => {
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  return (

    <GeneralContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <RoutesC />
      </div>
    </GeneralContext.Provider >

  );
}

export default App;
