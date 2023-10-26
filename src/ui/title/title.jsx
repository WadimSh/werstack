import React from "react";

const Title = ({ level, children }) => {
  const Tag = `h${level}`;

  return <Tag>{children}</Tag>;
}

export default Title;