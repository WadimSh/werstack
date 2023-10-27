import { useState } from "react";

import Input from "../input/input";
import Button from "../button/button";

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  console.log("url:", inputValue);

  return (
    <form style={{display: "flex", gap: "10px"}}>
        <Input 
          onInputChange={handleInputChange}
          placeholder="Укажите ссылку на дизайн-макет"
        />
        <Button 
          children="ЗАГРУЗИТЬ"
          side={false}
        />
      </form>
  );
};

export default Form;
