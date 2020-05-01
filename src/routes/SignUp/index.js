import React from "react";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate"
import { formNames } from "../../components/LoginSignUpTemplate/formConstants";

const SignUp = () => {
    return (
        <LoginSignUpTemplate form={formNames.SIGNUP.label} />
    )
}
export default SignUp;
