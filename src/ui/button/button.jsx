import React from "react";
import { Icon } from "../icons/signin";
import style from './button.module.css';

const Button = ({ htmiType, onClick, before, after, children, ...rest }) => {
  

  return (
    <button type={htmiType} onClick={onClick} className={style.button} {...rest}>
      {before && <Icon side={true} />}
      {children || null}
      {after && <Icon side={false} />}
    </button>
  )
};

export default Button;