import { useState } from "react";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <button type="button" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
};

export default BurgerButton;
