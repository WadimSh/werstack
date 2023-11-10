import { useState } from "react";

const BurgerButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <button type="button" onClick={handleClick} className="burger-button">
      <span 
        className={`burger-button_line ${isOpen ? "burger-button_line__up" : "" }`}
      ></span>
      <span 
        className={`burger-button_line ${isOpen ? "burger-button_line__one" : "" }`}
      ></span>
      <span 
        className={`burger-button_line ${isOpen ? "burger-button_line__down" : "" }`}
      ></span>
    </button>
  );
};

export default BurgerButton;
