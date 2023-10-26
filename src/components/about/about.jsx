import { useContext } from 'react';
import { ConfigContext } from '../../contexts/contexts';

import Title from '../../ui/title/title';
import Description from '../../ui/description/description';

const About = () => {
  const config = useContext(ConfigContext);
  const { title, description } = config.adout;

 return (
   <section>
      <Title level={1}>{title}</Title>
      <Description
       texts={description}
      />
   </section>
 );
};

export default About;