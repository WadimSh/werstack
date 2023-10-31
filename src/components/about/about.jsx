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
      <Title level={1}>{title}</Title>
      <Description
       texts={description}
      />
   </LayoutColumns>
 );
};

export default About;