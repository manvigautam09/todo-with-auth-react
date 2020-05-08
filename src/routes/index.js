import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import history from "../store/history";
import TodoDashboard from "./TodoDashboard";

export const routesConfig = {
  LOGIN: {
    path: "/login",
    name: "Login",
    component: Login,
    private: false,
    exact: true,
  },
  SIGNUP: {
    path: "/signUp",
    name: "SignUp",
    component: SignUp,
    private: false,
    exact: true,
  },
  TODODASHBOARD: {
    path: "/todoDashboard",
    name: "TodoDashboard",
    component: TodoDashboard,
    private: true,
    exact: true,
  },
};

const RoutesProtection = (props) => {
  const { component: Component, privateRoute, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        const isUserLoggedIn = localStorage.getItem("LOGIN_TOKEN");
        if (privateRoute) {
          if (isUserLoggedIn) {
            return <Component {...props} />;
          } else {
            return <Redirect to={routesConfig.LOGIN.path} />;
          }
        } else {
          if (!isUserLoggedIn) {
            return <Component {...props} />;
          } else {
            return <Redirect to={routesConfig.TODODASHBOARD.path} />;
          }
        }
      }}
    />
  );
};

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        {Object.values(routesConfig).map((config) => {
          return (
            <Route
              path={config.path}
              name={config.name}
              exact={config.exact}
              render={(props) => (
                <RoutesProtection
                  {...props}
                  component={config.component}
                  privateRoute={config.private}
                />
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
};
export default AppRoutes;
