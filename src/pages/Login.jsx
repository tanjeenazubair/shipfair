/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../libraries/firebase";
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../authentication";
import "../stylesheets/Login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>

        <input
          type="text"
          className="login__textBox"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <div className="google-btn" onClick={signInWithGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">Sign in with Google</p>
        </div>

        <div forget__password>
          <Link className="forget__password" to="/reset">
            Forgot Password ?
          </Link>
        </div>
        <div>
          Don't have an account?{" "}
          <Link className="forget__password" to="/signup">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
};
