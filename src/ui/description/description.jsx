import React from 'react';

const Description = ({ texts, customClass }) => {
  const classNames = ['text_type_default'];

  if (customClass) {
    classNames.push(customClass);
  }

  return (
    <div style={{ alignSelf: "flex-end", width: "800px" }}>
      {texts.map((text, index) => (
        <p key={index} className={classNames.join(' ')}>{text}</p>
      ))}
    </div>
  );
};

export default Description;