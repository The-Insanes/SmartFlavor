import React from 'react';
import './input-bar.css';

interface InputBarProps {
  label: string;
  type?: string;
}

const InputBar: React.FC<InputBarProps> = ({ label, type = "text" }) => {
  return (
    <div className="input-bar-container">
      <label className="input-bar-label">
        {label}
        <input className="input-bar" type={type} />
      </label>
    </div>
  );
};

export default InputBar;
