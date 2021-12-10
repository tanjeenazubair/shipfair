import React, { useContext } from 'react'
import {
    DashboardContainer,
    DashboardSideBar,
    NavigationBar,
  } from "../components";
import { PostCard } from '../components/PostCard';
import { FeedContext } from '../context/feed-context';
  

export const Parcels = () => {

  const pkgsCtx = useContext(FeedContext);
  // console.log(pkgsCtx);
  const { packages } = pkgsCtx;
  console.log(packages);

    return (
        <div>
            <div>
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={"YOUR PACKAGES"} />
      </div>
      <DashboardSideBar />
      {/* <DashboardContainer /> */}
      <div className='dashboard_container'>
        {packages.map(pkg => <PostCard key={pkg.id} id={pkg.id} url={pkg.url} title={pkg.title} description={pkg.description}/>)}
      </div>
    </div>
            
        </div>
    )
}
