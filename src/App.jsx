import { useState } from 'react';
import { config, ConfigContext } from './contexts/contexts';

//import Form from './components/form/form';
//import FAQ from './components/faq/faq';

import BurgerButton from './ui/burger-button/burger-button';

import './App.css';

function App() {
  const [lang] = useState('ru');
    
  return (
    <div className="app">
      <ConfigContext.Provider value={config[lang]}>
        <BurgerButton />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
