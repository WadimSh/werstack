import { useState } from 'react';
import { config, ConfigContext } from './utils/contexts';

//import LetStart from './components/let-start/let-start';
import Cover from './components/cover/cover';
import About from './components/about/about';
import FAQ from './components/faq/faq';

function App() {
  const [lang] = useState('ru');
    
  return (
    <ConfigContext.Provider value={config[lang]}>
      <Cover />
      <About />
      <FAQ />
    </ConfigContext.Provider>
  );
}

export default App;
