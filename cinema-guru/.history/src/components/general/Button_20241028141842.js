// src/components/general/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

export default function Button({ label, className, onClick, icon }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}

// PropTypes pour la validation des props
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
};
