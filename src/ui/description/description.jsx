import React from 'react';

const Description = ({ texts, customClass }) => {
  const classNames = ['text_type_default', customClass].filter(Boolean).join(' ');
  
  return (
    <div style={{ alignSelf: "flex-end", width: "800px" }}>
      {texts.map((text, index) => (
        <p key={index} className={classNames}>{text}</p>
      ))}
    </div>
  );
};

export default Description;