import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavigationBar } from "../components";
import { FeedContext } from "../context/feed-context";
import "../stylesheets/AddTrip.scss";

const AddTrip = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("Lahore");
  const [to, setTo] = useState("Islamabad");

  const pkgCtx = useContext(FeedContext);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    let id = Math.random() * 1000000;
    pkgCtx.addTrips({ id, title, description, from, to });
    setTitle("");
    setDescription("");
    setFrom("Lahore");
    setTo("Islamabad");

    history.push("/trips");
  };

  return (
    <>
      <NavigationBar />
      <div className="dashboard_container trips">
        <form onSubmit={submitHandler}>
          <h1 className="add_trip_heading">Add a Trip</h1>
          Give us information on your departure flight so we can optimize the
          packages that you see
          <div>
            <div className="add_trip_container">
              <label className="trip_input_labels " htmlFor="title">
                Title
              </label>
              <input
                className="add_trip_input"
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <div className="add_trip_desc_container">
                <label className="trip_input_labels one" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="add_trip_description"
                  autoComplete="off"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="add_trip_options_container">
              <label className="trip_input_labels " htmlFor="from">
                From
              </label>
              <select
                className="add_trip_input select_box"
                name=""
                value={from}
                id="from"
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option>
              </select>
              <label className="trip_input_labels " htmlFor="to">
                To
              </label>
              <select
                className="add_trip_input"
                name=""
                value={to}
                id="to"
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option>
              </select>
            </div>
            <div></div>
          </div>
          <div>
            <button className="button add_trip_submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTrip;
