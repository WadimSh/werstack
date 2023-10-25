import { useState } from 'react';
import { config, ConfigContext } from './contexts/contexts';

import Form from './components/form/form';
import FAQ from './components/faq/faq';

import './App.css';

function App() {
  const [lang] = useState('ru');
    
  return (
    <div className="app">
      <ConfigContext.Provider value={config[lang]}>
        <Form />
        <FAQ />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
