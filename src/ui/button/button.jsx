import React from "react";
import { Icon } from "../icons/icons";
import './button.css';

const Button = ({ htmlType = "button", onClick, side, children, customClass, ...rest }) => {
  const renderIcon = side !== undefined && <Icon side={side} />;
  const classNames = ['button', customClass].filter(Boolean).join(' ');
  
  return (
    <button type={htmlType} onClick={onClick} className={classNames} {...rest}>
      {renderIcon}
      {children}
    </button>
  )
};

export default Button;