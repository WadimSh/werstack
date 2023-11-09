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
    container
    ref={ref}
    gap={6}
  >
    <LayoutColumns
      item
      sm={12}
      md={4}
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
      <Description
         texts={description}
         customClass="mb-4"
      />
    </LayoutColumns>  
  </LayoutColumns>
 );
};

export default About;