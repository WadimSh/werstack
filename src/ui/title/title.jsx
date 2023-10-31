import React from "react";

const Title = ({ level, children }) => {
  const classMap = {
    1: 'text_type_large',
    2: 'text_type_medium',
  };
  const Tag = `h${level}`;
  const className = `text ${classMap[level] || 'text_type_small'}`;

  return <Tag className={`text ${className}`}>{children}</Tag>;
}

export default Title;