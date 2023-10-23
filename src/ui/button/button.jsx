import React from "react";
import style from './button.module.css';

const Button = ({ htmiType, onClick, icon, side, children, ...rest }) => {
  const Icon = icon && (
    <>
      {icon}
    </>
  )

  return (
    <button type={htmiType} onClick={onClick} className={style.button} {...rest}>
      {side === 'left' && {Icon}}
      {children || 'label'}
      {side === 'right' && {Icon}}
    </button>
  )
};

export default Button;