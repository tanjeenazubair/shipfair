/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";

const usePackages = () => {
  
  const [packages, setPackages] = useState([]);
  console.log("usePackages hook calling");

  useEffect(() => {


    // async function updatePkgs (movie) {
    //     const response = await fetch("https://shipfair-a6766-default-rtdb.firebaseio.com/pkgs.json", {
    //       method: 'POST',
    //       body: JSON.stringify(movie),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const data = await response.json();
    //     console.log('sending data')
    //     console.log(data);
    //   }

      // updatePkgs(JSON.parse(localStorage.getItem('packages')));




    async function getPackages() {
      try {
        const response = await axios.get(
          "https://shipfair-a6766-default-rtdb.firebaseio.com/pkgs.json"
        );
        console.log(response);
        const data = response.data;
        let pkgs = [];

        for (const key in data) {
          pkgs.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
          });
        }
        localStorage.setItem('packages', JSON.stringify(pkgs))
        setPackages(pkgs);

      } catch (error) {
        console.error(error);
      }
    }
    getPackages();

  }, []);

  return { packages };
};

export default usePackages;
