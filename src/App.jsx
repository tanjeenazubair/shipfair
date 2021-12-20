/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Home, Login, Parcels, Reset, Signup, Trips } from "./pages";
import * as ROUTES from "./constants/routes";
import { Profile } from "./pages/Profile";
import AddPackage from "./pages/AddPackage";
import AddTrip from "./pages/AddTrip";
import AllPackages from "./pages/AllPackages";
import AllTrips from "./pages/AllTrips";
import usePackages from "./hooks/use-packages";
import { FeedContext } from "./context/feed-context";
import GettingStartedTrip from "./pages/Forms/gettingstartedtrips";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Chat from "./pages/Chat";
import useTrips from "./hooks/use-trips";
import GettingStartedPkg from "./pages/Forms/gettingstartpkgs";

export const App = () => {

  const { packages } = usePackages();
  console.log(packages);
  const Ctx = useContext(FeedContext);
  Ctx.updatePkgs(packages);
  const { trips } = useTrips();
  Ctx.updateTrips(trips);


  return (
    <>
    <Router>
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.ALL_PKGS} exact>
        <AllPackages />
      </Route>
      <Route path={ROUTES.ALL_TRIPS} exact>
        <AllTrips />
      </Route>
      <Route path={ROUTES.ADD_TRIP} exact>
        <AddTrip />
      </Route>
      <Route path={ROUTES.ADD_PACKAGE} exact>
        <AddPackage />
      </Route>
      <Route path={ROUTES.START_TRIPS} exact>
        <GettingStartedTrip/>
      </Route>
      <Route path={ROUTES.SIGN_UP} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.START_PKGS} exact>
        <GettingStartedPkg />
      </Route>
      <Route path={ROUTES.START_TRIPS} exact>
        <GettingStartedPkg />
      </Route>
      <Route path={ROUTES.CONTACT} exact>
        <Contact />
      </Route>
      <Route path={ROUTES.RESET} exact>
        <Reset />
      </Route>
      <Route path={ROUTES.PROFILE} exact >
        <Profile />
      </Route>
      <Route path={ROUTES.TRIPS} exact >
        <Trips />
      </Route>
      <Route path={ROUTES.PARCELS} exact >
        <Parcels />
      </Route>
      <Route path={ROUTES.CHAT} exact >
        <Chat/>
      </Route>
      <Route path={ROUTES.DASHBOARD} >
        <Dashboard />
      </Route>
     
     
    </Switch>

</Router>
    </>

  );
};
