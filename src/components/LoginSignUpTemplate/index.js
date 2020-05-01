import React from "react";
import "./style.scss";
import signIn from "../../assets/images/signin-image.jpg";
import signUp from "../../assets/images/signup-image.jpg";
import { routeConstants } from "../../routes/routeConstants";
import { loginFormConstants, signupFormConstants, formNames } from "./formConstants";

const LoginSignUpTemplate = (props) => {
    const { form } = props;
    const formConstants = (form === formNames.LOGIN.label) ? loginFormConstants : signupFormConstants

    return (
        <div className="login-signup-template">
            <div className="form-section">
                <div className="image-part">
                    <img src={form === formNames.LOGIN.label ? signIn : signUp} alt="formimage" />
                    <a href={form === formNames.LOGIN.label ? routeConstants.SIGNUP.path : routeConstants.LOGIN.path} className="alternate-form-link">{props.form === "Sign In" ? "Create an account" : "I am already member"}</a>
                </div>
                <div className="form-part">
                    <div className="heading">{props.form}</div>
                    <div>
                        {
                            formConstants.map((item) => {
                                return (<div className="form-input">
                                    <label className="input-label">{item.label}</label>
                                    <input type={item.type} name={item.name} className="input-field" />
                                </div>)
                            })
                        }
                    </div>
                    <button type="Submit" className="form-button">Submit</button>
                </div>
            </div>
        </div>)
}
export default LoginSignUpTemplate;
