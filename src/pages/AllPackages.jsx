import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavigationBar } from '../components';
import Footer from '../components/Footer';
import { PostCard } from '../components/PostCard';
import "../stylesheets/AllPackages.scss"

const AllPackages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        
        async function getPackages() {
            try {
              const response = await axios.get(
                "https://shipfair-a6766-default-rtdb.firebaseio.com/all-packages.json"
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
              setPackages(pkgs);
      
            } catch (error) {
              console.error(error);
            }
          }
          getPackages();
    
    }, []);

    return (
    <>

      <div className="dashboard_greeting_container">
      <NavigationBar />
    </div>
    <div className="all_pkgs_container">

        <div className='heading_allpkgs'>
            <p >All the universal packages</p> 
            <div className='cards_container'>
                {packages.map(pkg => <PostCard key={pkg.id} id={pkg.id} url={pkg.url} title={pkg.title} description={pkg.description} contact={pkg.contact} by={pkg.by}/>)}
            </div>
    </div>
        </div>
            <Footer/>
        </>
    )
}

export default AllPackages
