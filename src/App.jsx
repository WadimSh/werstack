import { useState } from 'react';
import { config, ConfigContext } from './contexts/contexts';

//import LetStart from './components/let-start/let-start';
import About from './components/about/about';
import FAQ from './components/faq/faq';

import './App.css';

function App() {
  const [lang] = useState('ru');
    
  return (
    <div className="app">
      <ConfigContext.Provider value={config[lang]}>
        <About />
        <FAQ />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
