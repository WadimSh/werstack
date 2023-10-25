import { useContext } from "react";
import { ConfigContext } from "../../contexts/contexts";

import Form from "../../ui/form/form";

const LetStart = () => {
  const config = useContext(ConfigContext);
  const { title, description } = config.form;
  
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Form />
    </section>
  )
};

export default LetStart;