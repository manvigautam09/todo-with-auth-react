import React from "react";
import { connect } from "react-redux";
import { routeConstants } from "../routeConstants";
import signUp from "../../assets/images/signup-image.jpg";
import { updateSignUpDetails } from "../../store/actions";
import {
  formNames,
  signupFormConstants,
  alternateFormLinkLabels,
} from "../../components/LoginSignUpTemplate/formConstants";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

const SignUp = (props) => {
  const { updateSignUpDetails, signUpData } = props;
  const handleChange = (event, item) => {
    const inputValue = event.target.value;
    updateSignUpDetails({ item, inputValue });
  };

  return (
    <LoginSignUpTemplate
      image={signUp}
      formData={signUpData}
      onChange={handleChange}
      form={formNames.SIGNUP.label}
      formConstants={signupFormConstants}
      alternateLink={routeConstants.LOGIN.path}
      alternateFormLinkLabel={alternateFormLinkLabels.SIGNUP}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    signUpData: state.loginSignUpData.signUpData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSignUpDetails: (val) => dispatch(updateSignUpDetails(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
