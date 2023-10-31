import React from 'react';

const Description = ({ texts }) => {
  
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index} className="text text_type_default" style={{ marginBottom: '10px' }}>{text}</p>
      ))}
    </div>
  );
};

export default Description;