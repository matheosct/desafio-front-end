import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({ label, name }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} />
    </div>
  )
}

export default Input;