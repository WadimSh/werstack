import { useState } from "react";
import "./burger-button.css";
const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  console.log(isOpen)
  return (
    <button type="button" onClick={handleClick} className="box">
      <span className="line"
        style={
          isOpen === true ? {rotate: "45deg", width: "14px", top: "5.5px" } : { rotate: "0deg", width: "14px", top: "0px" }
        }
      ></span>
      <span className="line"
        style={
          isOpen === true ? { width: "0px" } : { width: "14px" }
        }
      ></span>
      <span className="line"
        style={
          isOpen === true ? {rotate: "-45deg", width: "14px", top: "-5.5px" } : { rotate: "0deg", width: "14px", top: "0px" }
        }
      ></span>
    </button>
  )
};

export default BurgerButton;
