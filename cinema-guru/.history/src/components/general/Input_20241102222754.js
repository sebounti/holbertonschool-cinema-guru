import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  return (
    <span className={"text-input " + className}>
      <label>
        {icon && <FontAwesomeIcon icon={icon} className="icon" />}
        {label};
      </label>
      <input
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </span>
  );
}
