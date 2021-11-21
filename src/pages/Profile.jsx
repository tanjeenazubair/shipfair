import React, { useEffect, useState } from "react";
import "../stylesheets/profile.scss";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { NavigationBar } from "../components";
import { auth, db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Details } from "../components/Details";
import { AdditionalDetails } from "../components/AdditionalDetails";
// import Button from '@mui/material/Button';
// import "../assets/shipfair-logo.png";

export const Profile = () => {
  const [name, setName] = useState("");

  const history = useHistory();

  const [user, loading] = useAuthState(auth);

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
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) history.replace("/login");
    fetchUserName();
  }, [user, loading]);
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <div className="dashboard_greeting_container">
        <NavigationBar greeting={`Welcome back, ${name}`} />
      </div>
      <div className="profile-main-container">
        <div className="profile-details-container">
          <div className="profile-image-container">
            <p className="joining-date">{`Joined on ${new Date().toLocaleDateString("en-US", {month:"long",day:"numeric"})},2021`}</p>
            <div className="verification">
              <p className="verification-heading">Get Verified</p>
            </div>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <Input
                  className="image-input"
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera className="camera" />
                </IconButton>
              </label>
            </Stack>
            <div className="username">
              <h2 className="username-heading">{name}</h2>
            </div>
            {/* <div className="cards"> */}
            <div className="card-1 credentials">
              <p className="details-heading">
                Credentials
                
              </p>
                <p id="user_email">{user?.email}</p>
            </div>
            <div className="about-heading">ABOUT
           
            </div>

            <div className="card-2 about">
            <p id="about_content"> <Details /></p>
              <p className="details-heading"></p>
            </div>
            <div className="card-3 questions">
              <p className="details-heading">Additional Details</p>
              <AdditionalDetails />
            </div>
            <div className="reviews-heading">REVIEWS</div>
            <div className="reviews-heading-design"></div>

            <div className="card-4 review">
            <p id="about_content"></p>
              <p className="details-heading"></p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
