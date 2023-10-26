import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Accordion from '../../ui/accordion/accordion';

const FAQ = () => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
   <section>
      <Title level={3}>ОТВЕТЫ НА ВОПРОСЫ</Title>
      <Accordion 
        faqs={list}
      />
   </section>
 );
};

export default FAQ;