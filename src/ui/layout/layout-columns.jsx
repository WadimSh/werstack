import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ children }) => {
  
  return (
    <section className="layout">
      {children}
    </section>
  );
};

export default LayoutColumns;