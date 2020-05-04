import authSaga from "./authSaga";
import { all } from "redux-saga/effects";

export const tasks = [...authSaga];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
