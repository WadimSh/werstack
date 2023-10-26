import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Accordion from '../../ui/accordion/accordion';

const FAQ = () => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
   <section>
      <Title 
        level={2}
        children={title}
      />
      <Accordion 
        faqs={list}
      />
   </section>
 );
};

export default FAQ;