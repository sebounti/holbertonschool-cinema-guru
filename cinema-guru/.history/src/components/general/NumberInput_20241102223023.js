import Input from "./Input";
import "./general.css";

const Number = ({ label, min, max, step, value, setValue }) => {
  return (
    <Input
      type="number"
      label={label}
      className="number-input"
      min={min}
      max={max}
      step={step}
      value={value}
      setValue={setValue}
    />
  );
};

export default Number;
