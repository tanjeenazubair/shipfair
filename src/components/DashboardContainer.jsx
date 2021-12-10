import React, { useContext } from "react";
import { Trips } from "../pages/Trips";
import { PostCard } from "./PostCard";
import { FeedContext } from "../context/feed-context";

export const DashboardContainer = () => {

  const { items } = useContext(FeedContext);

  return <div className="dashboard_container">
    {items.map((item) => <PostCard id={item.id} title={item.title} url={item.url} description = {item.description}/>)}
  </div>;
};
