/* eslint-disable no-unused-vars */
import React from "react";
import { DashboardSideBar, NavigationBar } from "../components";
import {DashboardContainer} from "../components/DashboardContainer";
import "../stylesheets/Dashboard.scss";
import { Profile } from "./Profile";

export const Dashboard = () => {
  return (
    <div className="dashboard_page">
      <div className="dashboard_greeting_container">
        <NavigationBar greeting="Welcome back, Falak Amin"/>

      </div>
      <DashboardSideBar/>
        {/* <div className="dashboard_container">
          
       
        </div> */}
      {/* <Profile/> */}
      <DashboardContainer/>
    </div>
  );
};
