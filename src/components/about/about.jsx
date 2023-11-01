import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Description from '../../ui/description/description';
import LayoutColumns from '../../ui/layout/layout-columns';


const About = ({ ref }) => {
  const config = useContext(ConfigContext);
  const { title, description } = config.adout;

 return (
  <LayoutColumns
  name="section"
  ref={ref}
>
      <Title 
        level={2}
        customClass="mb-4"
      >{title}</Title>
      <Description
       texts={description}
       customClass="mb-4"
      />
   </LayoutColumns>
 );
};

export default About;