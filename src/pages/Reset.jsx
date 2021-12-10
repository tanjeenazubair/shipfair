/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../libraries/firebase';
import { signInWithEmailAndPassword, signInWithGoogle,sendPasswordResetEmail } from "../authentication";
import '../stylesheets/Reset.scss';

export const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/");
    }, [user, loading]);
    return (
      <div className="reset">
        <div className="reset__container">
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="reset__btn"
            onClick={() => sendPasswordResetEmail(email)}
          >
            Send password reset email
          </button>
          <div>
            Don't have an account? <Link className="forget__password" to="/signup">Register</Link> now.
          </div>
        </div>
      </div>
    );
}
