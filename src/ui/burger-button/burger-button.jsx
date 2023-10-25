import { useState } from "react";
import "./burger-button.css";

const BurgerButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <button type="button" onClick={handleClick} className="boxi">
      <span 
        className="line"
        style={isOpen ? {rotate: "45deg", top: "6px" } : { rotate: "0deg", top: "0px" }}
      ></span>
      <span 
        className="line"
        style={isOpen ? { scale: "0" } : { scale: "1" }}
      ></span>
      <span 
        className="line"
        style={isOpen ? {rotate: "-45deg", top: "-5.5px" } : { rotate: "0deg", top: "0px" }}
      ></span>
    </button>
  );
};

export default BurgerButton;
