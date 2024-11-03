import React from "react";
import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ label, type = "button", className = "", onClick, icon }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
};

export default Button;
