import { push } from "connected-react-router";
import { put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";
import { loginUserSuccess } from "../actions";
import { routesConfig } from "../../routes";

export function* loginRequest(action) {
  const { email, password } = action.payload;
  const token = email + password;
  localStorage.setItem("LOGIN_TOKEN", token);
  yield put(loginUserSuccess(token));
  yield put(push(routesConfig.TODODASHBOARD.path));
}

export default [takeLatest(actionTypes.SIGN_IN_USER_REQUEST, loginRequest)];
