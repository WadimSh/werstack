import React from "react";
import "./title.css"

const Title = ({ level, children }) => {
  const Tag = `h${level}`;
  
return <Tag className={`title-${level > 3 ? 3 : level}`}>{children}</Tag>;
}

export default Title;