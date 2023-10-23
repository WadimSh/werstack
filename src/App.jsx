import { useState } from 'react';
import { config, ConfigContext } from './contexts/contexts';

import Button from './ui/button/button';

import './App.css';

function App() {
  const [lang] = useState('ru');

  return (
    <div className="app">
      <ConfigContext.Provider value={config[lang]}>
        <Button 
          htmiType="button"
          before
        />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
