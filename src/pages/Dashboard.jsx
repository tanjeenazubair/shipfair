/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { DashboardSideBar, NavigationBar } from "../components";
import {DashboardContainer} from "../components/DashboardContainer";
import "../stylesheets/Dashboard.scss";
import { auth,db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Profile } from "./Profile";
import { useHistory } from "react-router";


export const Dashboard = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) history.replace("/login");
    fetchUserName();

  }, [user, loading]);

 


  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="dashboard_page">
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={`Welcome back, ${name}`}/>

      </div>
      <DashboardSideBar/>
        {/* <div className="dashboard_container">
          
       
        </div> */}
      {/* <Profile/> */}
      <DashboardContainer/>
    </div>
  );
};
