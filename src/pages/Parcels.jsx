import React from 'react'
import {
    DashboardContainer,
    DashboardSideBar,
    NavigationBar,
  } from "../components";
  

export const Parcels = () => {
    return (
        <div>
            <div>
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={"YOUR PACKAGES"} />
      </div>
      <DashboardSideBar />
      <DashboardContainer />
    </div>
            
        </div>
    )
}
