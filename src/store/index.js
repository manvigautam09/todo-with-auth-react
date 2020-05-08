import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import history from "./history";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducer";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);
