import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import history from "../store/history";
import TodoDashboard from "./TodoDashboard";

export const routeConstants = {
  LOGIN: {
    path: "/login",
    name: "Login",
    component: Login,
  },
  SIGNUP: {
    path: "/signUp",
    name: "SignUp",
    component: SignUp,
  },
  TODODASHBOARD: {
    path: "/todoDashboard",
    name: "TodoDashboard",
    component: TodoDashboard,
  },
};

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={routeConstants.LOGIN.path}
          component={routeConstants.LOGIN.component}
          name={routeConstants.LOGIN.name}
          exact
        />
        <Route
          path={routeConstants.SIGNUP.path}
          component={routeConstants.SIGNUP.component}
          name={routeConstants.SIGNUP.name}
          exact
        />
        <Route
          path={routeConstants.TODODASHBOARD.path}
          component={routeConstants.TODODASHBOARD.component}
          name={routeConstants.TODODASHBOARD.name}
          exact
        />
      </Switch>
    </Router>
  );
};
export default AppRoutes;
