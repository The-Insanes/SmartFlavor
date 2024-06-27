import React, { useState } from 'react';
import './input-editbar.css';

interface InputEditBarProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const InputEditBar: React.FC<InputEditBarProps> = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="input-editbar">
      <div className="input-editbar-label">
        <div>{label}</div>
      </div>
      <div className="input-editbar-value-container">
        <input
          className="input-editbar-value"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className="input-editbar-divider"></div>
    </div>
  );
};

export default InputEditBar;


