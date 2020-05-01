import React from "react";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";
import { formNames } from "../../components/LoginSignUpTemplate/formConstants";

const Login = () => {
    return (
        <LoginSignUpTemplate form={formNames.LOGIN.label} />
    )
}
export default Login;
