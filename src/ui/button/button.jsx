import React from "react";
import { Icon } from "../icons/icons";
import './button.css';

const Button = ({ htmlType, onClick, side, children, ...rest }) => {
  const renderIcon = side !== undefined && <Icon side={side} />;
  const buttonType = htmlType !== undefined ? htmlType : "button";

  return (
    <button type={buttonType} onClick={onClick} className="button" {...rest}>
      {renderIcon}
      {children}
    </button>
  )
};

export default Button;