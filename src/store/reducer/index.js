import { combineReducers } from "redux";
import loginSignUpReducer from "./loginSignUpReducer";

export default combineReducers({
    loginSignupData: loginSignUpReducer
});
