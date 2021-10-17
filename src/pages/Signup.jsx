/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from '../libraries/firebase';
import { registerWithEmailAndPassword, signInWithGoogle } from "../authentication";
import '../stylesheets/Signup.scss';

export const Signup = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [gender, setGender] = useState("");
        const [user, loading, error] = useAuthState(auth);
        const history = useHistory();
        const register = () => {
          if (!name) alert("Please enter name");
          registerWithEmailAndPassword(name, email, password, gender);
        };
        useEffect(() => {
          if (loading) return;
          if (user) history.replace("/home");
        }, [user, loading]);
        return (
          <div className="register">
            <div className="register__container">
              <input
                type="text"
                className="register__textBox"
                value={name}
                autoComplete="off"
      
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
      
              />
      
            <input
                type="text"
                className="register__textBox"
                value={gender}
                autoComplete="off"
      
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
                
              />
      
              <input
                type="text"
                className="register__textBox"
                value={email}
                autoComplete="off"
      
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
              <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button className="register__btn" onClick={register}>
                Register
              </button>
              <button
                className="register__btn register__google"
                onClick={signInWithGoogle}
              >
                Register with Google
              </button>
              <div>
                Already have an account? <Link to="/">Login</Link> now.
              </div>
            </div>
      </div>
      
    )
}
