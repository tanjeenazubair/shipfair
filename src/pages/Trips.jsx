import React,  {useContext} from "react";
import {FeedContext} from '../context/feed-context'
import {
  DashboardContainer,
  DashboardSideBar,
  NavigationBar,
} from "../components";
import { PostCard } from "../components/PostCard";

export const Trips = () => {
   const TripsCtx = useContext(FeedContext);
   const {trips} = TripsCtx;
  //  console.log(TripsCtx);
  return (
    <div>
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={"YOUR TRIPS"} />
      </div>
      <DashboardSideBar />
      <div className="dashboard_container">
        {trips.map((trip) =>(
          <PostCard key={trip.id} id={trip.id} url={trip.url} title={trip.title} description={trip.description}/>))}
      </div>
    </div>
  );
};
