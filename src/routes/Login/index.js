import React from "react";
import { connect } from "react-redux";
import { routeConstants } from "../routeConstants";
import { updateLoginDetails } from "../../store/actions";
import signIn from "../../assets/images/signin-image.jpg";
import {
  formNames,
  loginFormConstants,
} from "../../components/LoginSignUpTemplate/formConstants";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

const Login = (props) => {
  const { updateLoginDetails, loginData } = props;
  const handleChange = (event, item) => {
    const inputValue = event.target.value;
    updateLoginDetails({ item, inputValue });
  };

  return (
    <LoginSignUpTemplate
      image={signIn}
      formData={loginData}
      onChange={handleChange}
      form={formNames.LOGIN.label}
      formConstants={loginFormConstants}
      alternateLink={routeConstants.SIGNUP.path}
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
    updateLoginDetails: (val) => dispatch(updateLoginDetails(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
