import {useState} from "react";

const InputField = ({ type = 'text', name, onInputChange, placeholder, customClass, ...rest }) => {
  const [error, setError] = useState('');

  return (
    <div className="field">
      <input 
        type={type}
        name={name}
        autoComplete="off"
        required
      />
      <label htmlFor={name} className="label-wrapper">
        <span className="label-text">
          {placeholder}
        </span>
      </label>
      {error && <span>{error}</span>}
    </div>
  )
};

export default InputField;