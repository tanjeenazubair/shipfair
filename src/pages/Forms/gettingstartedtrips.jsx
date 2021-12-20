import React from 'react'
import * as ROUTES from "../../constants/routes"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { NavigationBar } from '../../components'
import "../../stylesheets/GettingStartedTrip.scss"


const GettingStartedTrip = () => {
    const history = useHistory();

    
    return (
        <div>
             <div className="dashboard_greeting_container">
        <NavigationBar />
      </div >
      <div className="dashboard_container trips">
           <h1 className="add_trip_heading">POST A TRIP</h1>
           <div className="start_desc_container">
               
           <p className="start_desc" >By giving us information on your flight, we can use our pairing technology to give you a listing of packages. From there, you can choose a package that fits your carrying capacity, travel destination, and time.</p>
           </div>
           <div>

            <button className='button getting_start' onClick={() => {history.push(ROUTES.ADD_TRIP)}}>Next Page</button>
           </div>
        </div>
        </div>
    )
}

export default  GettingStartedTrip ;

