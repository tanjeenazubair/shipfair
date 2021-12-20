import React from 'react'
import * as ROUTES from "../../constants/routes"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { NavigationBar } from '../../components'
import "../../stylesheets/GettingStartedPkg.scss"


const GettingStartedPkg = () => {
    const history = useHistory();

    
    return (
        <div>
             <div className="dashboard_greeting_container">
        <NavigationBar />
      </div >
      <div className="dashboard_container trips">
           <h1 className="add_trip_heading">ADD A PACKAGE</h1>
           <div className="start_desc_container pkg">
               
           <p className="start_desc pkg" >By giving us information on your package, we can use our pairing technology to recommend your packages to travelers. From here, you are matched with someone that fits your package size, travel destination, and time preferences.</p>
           </div>
           <div>

            <button className='button getting_start pkg' onClick={() => {history.push(ROUTES.ADD_PACKAGE)}}>Next Page</button>
           </div>
        </div>
        </div>
    )
}

export default  GettingStartedPkg ;

