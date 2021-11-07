import React from 'react'
import '../stylesheets/DashboardSideBarItem.scss';



export const DashboardSideBarItem = ({icon,title}) => {
    return (
        <div className="item_container">
            <div className="item_image">
            {icon}
            </div>
            <div className="item_title">{title}</div>



            
            
        </div>
    )
}
