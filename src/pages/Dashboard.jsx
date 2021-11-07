import React from "react";
import { NavigationBar } from "../components";
import "../stylesheets/Dashboard.scss";
import { Profile } from "./Profile";

export const Dashboard = () => {
  return (
    <div className="dashboard_page">
      <div className="dashboard_container">
        <NavigationBar greeting="Welcome back, Falak Amin"/>
      </div>
      <Profile/>
    </div>
  );
};
