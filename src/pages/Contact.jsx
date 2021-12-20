import React, { useState, useEffect } from "react";
import "../stylesheets/Contact.scss";
import { NavigationBar } from "../components"
import Footer from "../components/Footer";
import { db } from "../libraries/firebase";

const Contact = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <div className="dashboard_greeting_container">
    <NavigationBar />
  </div>
    <div className="dashboard_container contact">
      <form className="contact_form" onSubmit={handleSubmit}>
      <h1 className="add_trip_heading">📞 Contact Us </h1>


      <label className="trip_input_labels " >Name</label>
      <input className="add_trip_input name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    <div>

      <label className="trip_input_labels ">Email</label>
      <input className="add_trip_input email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

      <label className="trip_input_labels message">Message</label>
      <textarea className="add_trip_input message_text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

     <button className="button submit">Submit</button>
    </form>

      
    </div>
    <Footer/>
    </>
    
  );
};
export default Contact
