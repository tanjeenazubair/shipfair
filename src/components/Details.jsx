import React, { useEffect, useState } from 'react'
import { auth, db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../stylesheets/Details.scss"

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
            <p className="details_items"> Bio: <input className="details_item_input bio" onChange={(e)=>setBio(e.target.value)}  value={bio}  readOnly={!toggle}/> </p>
            <p className="details_items">Country: <input className="details_item_input country " onChange={(e)=>setCountry(e.target.value)}  value={country} readOnly={!toggle}/></p>
            <p className="details_items">Company: <input className="details_item_input company" onChange={(e)=>setCompany(e.target.value)}  value={company} readOnly={!toggle}/></p>
            <button className="button" onClick={(toggle)=> setToggle(toggle)}>edit</button>
            <button className="button" onClick={onSaveHandler}>save</button>
        </div>
    )
}
