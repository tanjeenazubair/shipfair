import React from 'react'
import { DashboardSideBarItem } from '.';
import '../stylesheets/DashboardSideBar.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { IoAirplaneOutline } from 'react-icons/io5';
import { FiPackage } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { Profile } from '../pages/Profile';
import { useHistory } from 'react-router';


export const DashboardSideBar = (props) => {
    const history = useHistory();
    return (
        <div className="side_bar_container">
            
            <div onClick={() => history.push("/")}>
           < DashboardSideBarItem icon={<AiOutlineHome/>} title={"Home"}/>
           </div>

           <div onClick={() => history.push("/trips")}>

           < DashboardSideBarItem icon={<IoAirplaneOutline/>} title={"Trips"}/>
           </div>

           <div onClick={() => history.push("/parcels")}>

           < DashboardSideBarItem icon={<FiPackage/>} title={"Parcels"}/>
           </div>
           
           <div onClick={() => history.push("/chat")}>

           < DashboardSideBarItem icon={<BiMessageDetail/>} title={"Messages"}/>
           </div>
           {/* <div onClick={() => history.push("/parcels")}> */}

        <div onClick={() => history.push("/profile")}>
           < DashboardSideBarItem icon={<BiUserCircle/>} title={"Profile"}/>
           </div>
        

        </div>
    )
}
