import { useState } from 'react';
import { config, ConfigContext } from './contexts/contexts';

import './App.css';

function App() {
  const [lang] = useState('ru');

  return (
    <div className="app">
      <ConfigContext.Provider value={config[lang]}>
        
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
