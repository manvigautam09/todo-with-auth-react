import { actionTypes } from "../actionTypes";

export const updateLoginDetails = (payload) => {
  return {
    type: actionTypes.UPDATE_LOGIN_DETAILS,
    payload: payload,
  };
};

export const updateSignUpDetails = (payload) => {
  return {
    type: actionTypes.UPDATE_SIGNUP_DETAILS,
    payload: payload,
  };
};

export const loginUserRequest = (payload) => {
  return {
    type: actionTypes.SIGN_IN_USER_REQUEST,
    payload: payload,
  };
};

export const loginUserSuccess = (payload) => {
  return {
    type: actionTypes.SIGN_IN_USER_SUCCESS,
    payload: payload,
  };
};

export const loginUserFailure = (payload) => {
  return {
    type: actionTypes.SIGN_IN_USER_FAILURE,
    payload: payload,
  };
};
