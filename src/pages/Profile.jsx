import React from "react";
import "../stylesheets/profile.scss";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
// import "../assets/shipfair-logo.png";

export const Profile = () => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <div className="profile-main-container">
        <div className="profile-details-container">
          <div className="profile-image-container">
              <p className="joining-date">Joined on Sep 2021</p>
              <div className="verification"><p className="verification-heading"
              >Get Verified</p></div>
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
            <div className="username"><h2 className="username-heading">Falak Amin</h2></div>
            {/* <div className="cards"> */}
              <div className="card-1 credentials">
                <p className="details-heading">Credentials</p>
              </div>
              <div className="about-heading">ABOUT</div>

              <div className="card-2 about">
                <p className="details-heading"></p>
              </div>
              <div className="card-3 questions">
                <p className="details-heading">Additional Details</p>
              </div>
              <div className="reviews-heading">REVIEWS</div>
              <div className="reviews-heading-design"></div>

              <div className="card-4 review">
                <p className="details-heading"></p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
