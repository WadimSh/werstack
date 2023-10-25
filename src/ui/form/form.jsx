import { useState } from "react";

import Input from "../input/input";
import Button from "../button/button";

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const resalt = inputValue;

  return (
    <form style={{display: "flex", gap: "10px"}}>
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
  );
};

export default Form;
