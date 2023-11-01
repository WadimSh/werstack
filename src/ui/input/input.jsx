import { useRef, useState, useEffect } from 'react';

const Input = ({ type = 'text', label, placeholder, onInputChange, validation, value }) => {
  const inputRef = useRef();
  const [error, setError] = useState('');

  useEffect(() => {
    // Валидация введенного значения при монтировании компонента
    validateInput(value);
  }, [value]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onInputChange(inputValue);
    validateInput(inputValue);
  };

  const validateInput = (inputValue) => {
    // Проверка наличия функции валидации и вызов ее, если она передана
    if (validation && typeof validation === 'function') {
      const errorMessage = validation(inputValue);
      setError(errorMessage);
    } else {
      // Если функция валидации не передана, проверяем, что поле не пустое
      if (inputValue.trim() === '') {
        setError('Это поле обязательно');
      } else {
        setError('');
      }
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
