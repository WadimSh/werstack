import { useRef } from 'react';

const Input = ({ onInputChange, placeholder }) => {
  const inputRef = useRef();

  const handleInputChange = () => {
    const value = inputRef.current.value;
    onInputChange(value);
  };

  return (
    <input
      ref={inputRef}
      type='text'
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
