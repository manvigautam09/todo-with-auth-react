import React, { useState } from "react";
import "./style.scss";

const FormInputField = (props) => {
  const { item, onChange, password } = props;
  const [fieldError, updateFieldError] = useState("");

  const handleOnBlur = (event, item) => {
    const inputValue = event.target.value;
    let error = item.validations(inputValue, password);
    updateFieldError(error);
  };

  const handleChange = (event, item) => {
    onChange(event, item);
    if (fieldError) {
      let error = item.validations(event.target.value, password);
      updateFieldError(error);
    }
  };

  return (
    <div className="form-input">
      <label className="input-label">{item.label}</label>
      <input
        type={item.type}
        name={item.name}
        className="input-field"
        onChange={(val) => handleChange(val, item)}
        onBlur={(e) => handleOnBlur(e, item)}
      />
      <div className="error-div">{fieldError}</div>
    </div>
  );
};

export default FormInputField;
