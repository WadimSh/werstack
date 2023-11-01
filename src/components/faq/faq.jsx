import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Accordion from '../../ui/accordion/accordion';
import LayoutColumns from '../../ui/layout/layout-columns';
import Form from '../../ui/form/form';

const FAQ = ({ ref }) => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
  <LayoutColumns
    name="section"
    ref={ref}
  >
    <Form />
    <Title 
        level={2}
        customClass="mb-4"
      >{title}</Title>
      <Accordion 
        faqs={list}
      />
  </LayoutColumns>
  );
};

export default FAQ;