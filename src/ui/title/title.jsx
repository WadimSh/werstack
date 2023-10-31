import React from "react";

const Title = ({ level, children, customClass }) => {
  const classMap = {
    1: 'text_type_large',
    2: 'text_type_medium',
  };

  const defaultClass = 'text_type_small';
  const selectedClass = classMap[level] || defaultClass;
  const combinedClass = `${selectedClass} ${customClass || ''}`;
  const Tag = `h${level || 3}`;

  return <Tag className={combinedClass}>{children}</Tag>;
}

export default Title;