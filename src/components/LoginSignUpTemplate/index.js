import React from "react";
import "./style.scss";
import FormInputField from "./FormInputField";

const LoginSignUpTemplate = (props) => {
  const {
    form,
    image,
    onChange,
    formData,
    formConstants,
    alternateLink,
  } = props;

  return (
    <div className="login-signup-template">
      <div className="form-section">
        <div className="image-part">
          <img src={image} alt="formimage" />
          <a href={alternateLink} className="alternate-form-link">
            {form === "Sign In" ? "Create an account" : "I am already member"}
          </a>
        </div>
        <div className="form-part">
          <div className="heading">{form}</div>
          <div>
            {formConstants.map((item) => {
              return (
                <FormInputField
                  item={item}
                  form={form}
                  key={item.label}
                  onChange={onChange}
                  password={formData.password}
                />
              );
            })}
          </div>
          <button type="Submit" className="form-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginSignUpTemplate;
