import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutesC from './RoutesC.js';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';



function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "he" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <RoutesC />
    </div>
  );
}

export default App;
