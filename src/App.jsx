/* eslint-disable no-unused-vars */
import React from "react";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Home, Login, Reset, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
export const App = () => {
  return (
    <Router>
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.SIGN_UP} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.RESET} exact>
        <Reset />
      </Route>
      <Route path={ROUTES.DASHBOARD} exact>
        <Dashboard />
      </Route>
      {/* <Route path={ROUTES.HOME}>
        <Home />
      </Route> */}
     
    </Switch>
</Router>
  );
};
