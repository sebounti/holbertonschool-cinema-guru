import './general.css';

const SelectInput = ({label, options, className, value, setValue}) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={`select-input-container ${className}`}>
            <label>
                {label}
            </label>
            <select value={value} onChange={handleSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;
