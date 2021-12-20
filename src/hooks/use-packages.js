/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../libraries/firebase';

const usePackages = () => {
  
  const [packages, setPackages] = useState([]);
  console.log("usePackages hook calling");

  const [user] = useAuthState(auth);

  useEffect(() => {

    async function getPackages() {
      try {
        const response = await axios.get(
          "https://shipfair-a6766-default-rtdb.firebaseio.com/packages.json"
        );
        console.log(response);
        const data = response.data;
        let pkgs = [];

        for (const key in data) {
          console.log(key,data[key])
          if (data[key].contact === user?.email) {
            pkgs.push({
              id: key,
              title: data[key].title,
              description: data[key].description,
              contact: data[key].contact,
               by: data[key].by
            });
          }
        }
        console.log(pkgs);
        localStorage.setItem('packages', JSON.stringify(pkgs))
        setPackages(pkgs);

      } catch (error) {
        console.error(error);
      }
    }
    getPackages();

  }, [packages]);

  return { packages };
};

export default usePackages;
