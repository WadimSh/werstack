import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ name, ref, children }) => {
  const names = ['section', 'div', 'footer', 'header'];

  const Tag = names.includes(name) ? name : 'div';

  return (
    <Tag className="layout" ref={ref}>
      {children}
    </Tag>
  );
};

export default LayoutColumns;