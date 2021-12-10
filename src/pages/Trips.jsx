import React from "react";
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";

export const Trips = () => {
  return (
    <div>
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={"YOUR TRIPS"} />
      </div>
      <DashboardSideBar />
      <DashboardContainer />
    </div>
  );
};
