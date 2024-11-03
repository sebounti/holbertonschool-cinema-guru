import './general.css';
import React from 'react';

const SelectInput = ({ label, options, multiple, value, setValue }) => {
  const handleSelect = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="select-input">
      <p>{label}:</p>
      <select multiple={multiple} value={value} onChange={handleSelect}>
        {options.map((option, idx) => <option value={option.value} key={idx}>{option.label}</option>)}
      </select>
    </div>
  );
}

export default SelectInput;
