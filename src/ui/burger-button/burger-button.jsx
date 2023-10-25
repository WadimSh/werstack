import { useState } from "react";
import "./burger-button.css";
const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <button type="button" onClick={handleClick} className="box">
      <span className="line"
        style={
          isOpen ? {rotate: "45deg", width: "24px", top: "6px" } : { rotate: "0deg", width: "24px", top: "0px" }
        }
      ></span>
      <span className="line"
        style={
          isOpen ? { width: "0px" } : { width: "24px" }
        }
      ></span>
      <span className="line"
        style={
          isOpen ? {rotate: "-45deg", width: "24px", top: "-5.5px" } : { rotate: "0deg", width: "24px", top: "0px" }
        }
      ></span>
    </button>
  );
};

export default BurgerButton;
