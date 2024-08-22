import React from "react";
import { connect } from "react-redux";
import { routesConfig } from "../index";
import { updateLoginDetails, loginUserRequest } from "../../store/actions";
import signIn from "../../assets/images/signin-image.jpg";
import {
  formNames,
  loginFormConstants,
  alternateFormLinkLabels,
} from "../../components/LoginSignUpTemplate/formConstants";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

const Login = (props) => {
  const { updateLoginDetails, loginData, loginUserRequest } = props;
  const handleChange = (event, item) => {
    const inputValue = event.target.value;
    updateLoginDetails({ item, inputValue });
  };

  const handleSignIn = () => {
    loginUserRequest(loginData);
  };

  return (
    <LoginSignUpTemplate
      image={signIn}
      formData={loginData}
      onChange={handleChange}
      handleSubmit={handleSignIn}
      form={formNames.LOGIN.label}
      formConstants={loginFormConstants}
      alternateLink={routesConfig.SIGNUP.path}
      alternateFormLinkLabel={alternateFormLinkLabels.LOGIN}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loginData: state.loginSignUpData.loginData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserRequest: (val) => dispatch(loginUserRequest(val)),
    updateLoginDetails: (val) => dispatch(updateLoginDetails(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
