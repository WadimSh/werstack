import { useState } from "react";
import '../../style/styles.css';

const BurgerButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <button type="button" onClick={handleClick} className="boxi">
      <span 
        className={`line ${isOpen ? "up" : "" }`}
      ></span>
      <span 
        className={`line ${isOpen ? "one" : "" }`}
      ></span>
      <span 
        className={`line ${isOpen ? "down" : "" }`}
      ></span>
    </button>
  );
};

export default BurgerButton;
