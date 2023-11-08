import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Accordion from '../../ui/accordion/accordion';
import LayoutColumns from '../../ui/layout/layout-columns';

const FAQ = ({ ref }) => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
  <LayoutColumns
    container
    nameTag="section"
    ref={ref}
    gap={8}
  >
    <LayoutColumns
      item
      sm={12}
      md={9}
    >
      <Title 
        level={2}
        customClass="mb-4"
      >{title}</Title>
    </LayoutColumns>
    <LayoutColumns
      item
      md={12}
    >
      <Accordion 
        faqs={list}
      />
    </LayoutColumns>  
      
  </LayoutColumns>
  );
};

export default FAQ;