import React from 'react';

const Description = ({ texts, customClass }) => {
  // Создаем массив classNames, который содержит два класса: 'text_type_default' и customClass (если он предоставлен), и убираем пустые значения
  const classNames = ['text_type_default', customClass].filter(Boolean).join(' ');
  
  return (
    <div style={{ alignSelf: "flex-end", maxWidth: "800px" }}>
      {texts.map((text, index) => (
        <p key={index} className={classNames}>{text}</p>
      ))}
    </div>
  );
};

export default Description;