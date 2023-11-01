import React from "react";

const Title = ({ level = 3, children, customClass }) => {
  const classMap = {
    1: 'text_type_large',
    2: 'text_type_medium',
    3: 'text_type_small',
  };
  const selectedClass = classMap[level] || 'text_type_default';
  const classNames = [selectedClass, customClass].filter(Boolean).join(' ');
  const Tag = `h${level > 3 ? 4 : level}`;

  return <Tag className={classNames}>{children}</Tag>;
}

export default Title;