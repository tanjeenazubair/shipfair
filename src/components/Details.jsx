import React, { useEffect, useState } from 'react'
import { auth, db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Details = () => { 

    const [toggle, setToggle] = useState(false)
    const [country, setCountry] = useState(JSON.parse(localStorage.getItem('country')) || '');
    const [bio, setBio]= useState(JSON.parse(localStorage.getItem('bio')) || '');
    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')) || '');

    const onSaveHandler = () => {
      setToggle(!toggle);
      localStorage.setItem('bio',JSON.stringify(bio));
      localStorage.setItem('country',JSON.stringify(country));
      localStorage.setItem('company',JSON.stringify(company));
    };
    

    return (
        <div>
            <p> Bio: <input onChange={(e)=>setBio(e.target.value)}  value={bio}  readOnly={!toggle}/> </p>
            <p>Country: <input onChange={(e)=>setCountry(e.target.value)}  value={country} readOnly={!toggle}/></p>
            <p>Company: <input onChange={(e)=>setCompany(e.target.value)}  value={company} readOnly={!toggle}/></p>
            <button onClick={(toggle)=> setToggle(toggle)}>edit</button>
            <button onClick={onSaveHandler}>save</button>
        </div>
    )
}
