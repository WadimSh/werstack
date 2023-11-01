import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ name, forwardedRef, children }) => {
  const validNames = ['section', 'div', 'article', 'footer', 'header'];
  const Tag = validNames.includes(name) ? name : 'div';

  return (
    <Tag className="layout" ref={forwardedRef}>
      {children}
    </Tag>
  );
};

export default React.forwardRef((props, ref) => (
  <LayoutColumns forwardedRef={ref} {...props} />
));