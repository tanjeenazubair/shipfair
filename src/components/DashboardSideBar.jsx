import React from 'react'
import { DashboardSideBarItem } from '.';
import '../stylesheets/DashboardSideBar.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { IoAirplaneOutline } from 'react-icons/io5';
import { FiPackage } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';


export const DashboardSideBar = (props) => {
    return (
        <div className="side_bar_container">
            
           < DashboardSideBarItem icon={<AiOutlineHome/>} title={"Home"}/>
           < DashboardSideBarItem icon={<IoAirplaneOutline/>} title={"Trips"}/>
           < DashboardSideBarItem icon={<FiPackage/>} title={"Parcels"}/>
           < DashboardSideBarItem icon={<BiMessageDetail/>} title={"Messages"}/>
           < DashboardSideBarItem icon={<BiUserCircle/>} title={"Profile"}/>
        

        </div>
    )
}
