import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';
import Accordion from '../../ui/accordion/accordion';

const FAQ = () => {
  const config = useContext(ConfigContext);
  const { title, list } = config.faq;

 return (
   <>
     <h2>{title}</h2>
       <Accordion 
         faqs={list}
       />
   </>
 );
};

export default FAQ;