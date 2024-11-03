// src/components/general/Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes = {}
}) {
  // Gestion du changement de valeur
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes} // Autres attributs supplémentaires
          className={`input-field ${icon ? 'with-icon' : ''}`}
        />
      </div>
    </div>
  );
}

// PropTypes pour la validation des props
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.element,
  inputAttributes: PropTypes.object,
};
