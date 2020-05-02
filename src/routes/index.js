import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routeConstants } from "./routeConstants";

const AppRoutes = () => {
  return (
    <Router>
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
