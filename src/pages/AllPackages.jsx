import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <div>
            All the universal packages
            <div>
                {packages.map((pkg)=>{return <div>{pkg.title}</div>})}
            </div>
        </div>
    )
}

export default AllPackages
