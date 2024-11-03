import './general.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    const id = `input-${label.replace(/\s/g, '').toLowerCase()}`;

    return (
        <div className={`input-container ${className}`}>
            <div className='icon-label'>
                {icon && <FontAwesomeIcon icon={icon} />}
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <input
              id={id}
              name={id}
              type={type}
              value={value}
              onChange={handleInput }
              {...inputAttributes}
            />
        </div>
    );
}

export default Input;
