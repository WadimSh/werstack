import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Accordion from '../../ui/accordion/accordion';
import LayoutColumns from '../../ui/layout/layout-columns';

const FAQ = () => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
  <LayoutColumns>
    <Title 
        level={2}
        children={title}
      />
      <Accordion 
        faqs={list}
      />
  </LayoutColumns>
  );
};

export default FAQ;