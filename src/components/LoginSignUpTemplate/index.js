import React, { useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux"
import signIn from "../../assets/images/signin-image.jpg";
import signUp from "../../assets/images/signup-image.jpg";
import { routeConstants } from "../../routes/routeConstants";
import { updateLoginDetails, updateSignUpDetails, updateLoginFormError, updateSignUpFormError } from "../../store/actions";
import { loginFormConstants, signupFormConstants, formNames, validateEmail, validatePassword, validateUserName, validateConfirmPassword } from "./formConstants";

const LoginSignUpTemplate = (props) => {
    const { form, updateLoginDetails, updateSignUpDetails, signUpData, updateLoginFormError, updateSignUpFormError, loginError, signUpError } = props;
    const formConstants = (form === formNames.LOGIN.label) ? loginFormConstants : signupFormConstants

    const handleChange = (event, item, form) => {
        const inputValue = event.target.value;
        form === formNames.LOGIN.label ? updateLoginDetails({ item, inputValue }) : updateSignUpDetails({ item, inputValue });
    }

    const handleOnBlur = (event, item, form) => {
        const inputValue = event.target.value;
        let error = "";
        if (item.name === "email") {
            error = validateEmail(inputValue);
        }
        else if (item.name === "password") {
            error = validatePassword(inputValue)
        }
        else if (item.name === "name") {
            error = validateUserName(inputValue);
        }
        else if (item.name === "confirmPassword") {
            error = validateConfirmPassword(signUpData.password, inputValue)
        }
        form === formNames.LOGIN.label ? updateLoginFormError({ item, error }) : updateSignUpFormError({ item, error });
    }


    return (
        <div className="login-signup-template">
            <div className="form-section">
                <div className="image-part">
                    <img src={form === formNames.LOGIN.label ? signIn : signUp} alt="formimage" />
                    <a href={form === formNames.LOGIN.label ? routeConstants.SIGNUP.path : routeConstants.LOGIN.path} className="alternate-form-link">{form === "Sign In" ? "Create an account" : "I am already member"}</a>
                </div>
                <div className="form-part">
                    <div className="heading">{form}</div>
                    <div>
                        {
                            formConstants.map((item) => {
                                const fieldError = form === formNames.LOGIN.label ? loginError[item.name] : signUpError[item.name];
                                return (
                                    <div key={item.label} className="form-input">
                                        <label className="input-label">{item.label}</label>
                                        <input type={item.type} name={item.name} className="input-field" onChange={(val) => handleChange(val, item, form)} onBlur={(e) => handleOnBlur(e, item, form)} />
                                        <div className="error-div">{fieldError}</div>
                                    </div>)
                            })
                        }
                    </div>
                    <button type="Submit" className="form-button">Submit</button>
                </div>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        loginData: state.loginSignUpData.loginData,
        signUpData: state.loginSignUpData.signUpData,
        loginError: state.loginSignUpData.loginError,
        signUpError: state.loginSignUpData.signUpError,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateLoginDetails: (val) => dispatch(updateLoginDetails(val)),
        updateSignUpDetails: (val) => dispatch(updateSignUpDetails(val)),
        updateLoginFormError: (val) => dispatch(updateLoginFormError(val)),
        updateSignUpFormError: (val) => dispatch(updateSignUpFormError(val))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUpTemplate);

