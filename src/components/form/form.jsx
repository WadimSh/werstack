import { useContext, useState } from "react";
import { ConfigContext } from "../../contexts/contexts";

import Input from "../../ui/input/input";
import Button from "../../ui/button/button";

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const config = useContext(ConfigContext);
  const { title, description } = config.form;

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  console.log('Input value:', inputValue);

  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <form style={{display: "flex"}}>
        <Input 
          onInputChange={handleInputChange}
          placeholder="Укажите ссылку на дизайн-макет"
        />
        <Button 
          htmiType="button"
          children="ЗАГРУЗИТЬ"
          after
        />
      </form>
    </section>
  )
};

export default Form;