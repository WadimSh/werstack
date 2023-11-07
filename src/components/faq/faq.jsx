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
    container={true}
    nameTag="section"
    ref={ref}
    gap={8}
  >
    <LayoutColumns
      item={true}
      xs={8}
      xl={7}
    >
      <Title 
        level={2}
        customClass="mb-4"
      >{title}</Title>
    </LayoutColumns>
    <LayoutColumns
      item={true}
      md={12}
      xl={8}
    >
      <Accordion 
        faqs={list}
      />
    </LayoutColumns>  
      
  </LayoutColumns>
  );
};

export default FAQ;