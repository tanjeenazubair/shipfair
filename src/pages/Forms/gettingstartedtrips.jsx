import React from 'react'
import * as ROUTES from "../../constants/routes"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { NavigationBar } from '../../components'


const GettingStartedTrip = () => {
    const history = useHistory();

    
    return (
        <div>
             <div className="dashboard_greeting_container">
        <NavigationBar />
      </div >
      <div className="dashboard_container trips">
           <h1 className="add_trip_heading">POST A TRIP</h1>
            <button className='button add_trip_submit' onClick={() => {history.push(ROUTES.ADD_TRIP)}}>Next Page</button>
        </div>
        </div>
    )
}

export default  GettingStartedTrip ;

