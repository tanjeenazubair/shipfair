/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useHistory } from "react-router-dom";
import { auth, db } from "../libraries/firebase";
import { logout } from "../authentication";
import '../stylesheets/Home.scss';

export const Home = () => {
        const [user, loading, error] = useAuthState(auth);
        const [name, setName] = useState("");
        const history = useHistory();
        const fetchUserName = async () => {
          try {
            const query = await db
              .collection("users")
              .where("uid", "==", user?.uid)
              .get();
            const data = await query.docs[0].data();
            setName(data.name);
          } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
          }
        };
        useEffect(() => {
          if (loading) return;
          if (!user) return history.replace("/login");
          fetchUserName();
        }, [user, loading]);
        return (
          <div className="dashboard">
            <div className="dashboard__container">
              Logged in as
              <div>{name}</div>
              <div>{user?.email}</div>
              <button className="dashboard__btn" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        );
    
}
