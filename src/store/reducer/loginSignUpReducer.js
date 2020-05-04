import { actionTypes } from "../actionTypes";

const initialState = {
  loginData: {
    email: "",
    password: "",
  },
  signUpData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  token: "",
};

const loginSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOGIN_DETAILS: {
      state.loginData[action.payload.item.name] = action.payload.inputValue;
      return { ...state };
    }
    case actionTypes.UPDATE_SIGNUP_DETAILS: {
      state.signUpData[action.payload.item.name] = action.payload.inputValue;
      return { ...state };
    }
    case actionTypes.SIGN_IN_USER_SUCCESS: {
      return { ...state, token: action.payload };
    }
    default:
      return { ...state };
  }
};

export default loginSignUpReducer;
