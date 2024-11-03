import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubmitButton = ({ label, icon = "", className = "", onClick }) => {
  return (
    <button className={"submit-button " + className} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
      <p>{label}</p>
    </button>
  );
};

export default SubmitButton;
