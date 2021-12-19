import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {PostCard} from '../components/PostCard';

const AllTrips = () => {

    const [trips, setTrips] = useState([]);
    


    useEffect(() => {
        
        async function getPackages() {
            try {
              const response = await axios.get(
                "https://shipfair-a6766-default-rtdb.firebaseio.com/all-trips.json"
              );
              console.log(response);
              const data = response.data;
              let pkgs = [];
      
              for (const key in data) {
                console.log(key,data[key])
                pkgs.push({
                  id: key,
                  title: data[key].title,
                  description: data[key].description,
                  contact: data[key].contact,
                  by: data[key].by
                });
              }
              console.log(pkgs);
              localStorage.setItem('packages', JSON.stringify(pkgs))
              setTrips(pkgs);
      
            } catch (error) {
              console.error(error);
            }
          }
          getPackages();
    
    }, []);

    return (
        <div>
            All the Universal trips
            <div>
                {trips.map(trip => <PostCard key={trip.id} id={trip.id} url={trip.url} title={trip.title} description={trip.description} contact={trip.contact} by={trip.by}/>)}
            </div>
        </div>
    )
}

export default AllTrips
