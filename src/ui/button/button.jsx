import React from "react";
import { Icon } from "../icons/icons";
import './button.css';

const Button = ({ htmiType, onClick, before, after, children, ...rest }) => {
  

  return (
    <button type={htmiType} onClick={onClick} className="button" {...rest}>
      {before && <Icon side={true} />}
      {children || null}
      {after && <Icon side={false} />}
    </button>
  )
};

export default Button;