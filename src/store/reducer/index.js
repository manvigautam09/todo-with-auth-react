import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import loginSignUpReducer from "./loginSignUpReducer";

export default combineReducers({
  loginSignUpData: loginSignUpReducer,
  router: connectRouter(history),
});
