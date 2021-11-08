import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Trips} from "../pages/Trips"
import { PostCard } from './PostCard';

export const DashboardContainer = () => {
    return (
                <div className="dashboard_container">
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
      

        
        </div>
    )
}
