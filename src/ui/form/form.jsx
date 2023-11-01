import { useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleInputChange = (inputName, inputValue) => {
    setIsDisabled(false);
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    // В этой функции вы можете обрабатывать данные формы, используя formData

    console.log('Отправлено: ', formData);
  };

  const isNameValid = (value) => {
    return /^[А-Яа-яЁёA-Za-z\s\-]{2,50}$/.test(value);
  };

  const isEmailValid = (value) => {
    // Проверка наличия "@" в адресе
    if (!/@/.test(value)) { return false; }
  
    // Проверка длины адреса
    if (value.length > 320) { return false; }
  
    // Проверка на разрешенные символы
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Имя"
        placeholder="Введите имя"
        value={formData.name}
        onInputChange={(value) => handleInputChange('name', value)}
        validation={(value) => value.trim() === '' ? 'Это поле обязательно' : !isNameValid(value) ? 'Введите корректное имя' : ''}
      />

      <Input
        type="email"
        label="Email"
        placeholder="Введите email"
        value={formData.email}
        onInputChange={(value) => handleInputChange('email', value)}
        validation={(value) => value.trim() === '' ? 'Это поле обязательно' : !isEmailValid(value) ? 'Введите корректный email' : ''}
      />

      <Button type="submit" disabled={isDisabled}>Отправить</Button>
    </form>
  );
};

export default Form;