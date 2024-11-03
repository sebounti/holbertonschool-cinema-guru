import React from "react";

export default function SelectInput({
  label,
  options,
  className,
  value,
  setValue,
}) {
  // fonction qui gere le changement de section
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-input-container ${className}`}>
      {label && <label className="select-input-label">{label}</label>}
      <select value={value} onChange={handleSelect} className="select-input">
        <option value="" disabled>
          --- Choississez une option ---
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
