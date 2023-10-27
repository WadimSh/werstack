import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ name, ref, children }) => {
  const names = ['section', 'div', 'footer', 'header'];

  if (![name].every(value => names.includes(value))) {
    const Tag = 'div';
    return (
      <Tag className="layout" ref={ref}>
        {children}
      </Tag>
    );
  } else {
    const Tag = name;
    return (
      <Tag className="layout" ref={ref}>
        {children}
      </Tag>
    );
  }
  
  
};

export default LayoutColumns;