import React from "react";
import { Icon } from "../icons/icons";

const Button = ({ htmlType = "button", onClick, side, children, customClass, ...rest }) => {
  // Проверка, нужно ли отображать иконку и передача props в компонент Icon
  const renderIcon = side !== undefined && <Icon side={side} />;
  // Создание строки с CSS классами
  const classNames = ['text_type_span button', customClass].filter(Boolean).join(' ');
  
  return (
    <button type={htmlType} onClick={onClick} className={classNames} {...rest}>
      {renderIcon}
      {children}
    </button>
  )
};

export default Button;