import React, { useEffect, useState } from 'react'
import { auth, db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Details = () => { 

    const [toggle, setToggle] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [country, setCountry] = useState("");
    const [bio, setBio]= useState("");
    const [company, setCompany] = useState("");
    
    const fetchDetails = async () => {
      try {
        const query = await db
          .collection("users")
          .where("uid", "==", user?.uid)
          .get();
        const data = await query.docs[0].data();
        setBio(data.about.bio);
        setCompany(data.about.company);
        setCountry(data.about.country);
      } catch (err) {
        console.error(err);
       
      }
    };

    useEffect(() => {
      if (loading) return;
      fetchDetails();
    }, [user, loading]);

    return (
        <div>
            <p> Bio: <input onChange={(e)=>setBio(e.target.value)}  value={bio}  readOnly={!toggle}/> </p>
            <p>Country: <input onChange={(e)=>setCountry(e.target.value)}  value={country} readOnly={!toggle}/></p>
            <p>Company: <input onChange={(e)=>setCompany(e.target.value)}  value={company} readOnly={!toggle}/></p>
            <button onClick={(toggle)=> setToggle(toggle)}>edit</button>
            <button onClick={(toggle)=> setToggle(!toggle)}>save</button>
        </div>
    )
}
