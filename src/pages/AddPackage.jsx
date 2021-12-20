import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { NavigationBar } from '../components';
import { FeedContext } from '../context/feed-context';
import { auth, db } from "../libraries/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from '../components/Footer';



const AddPackage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [from, setFrom] = useState('Lahore');
    const [to, setTo] = useState('Islamabad');
    const [name, setName] = useState('');

    const pkgCtx = useContext(FeedContext);
    const cities = ["Lahore" , "Karachi" , "Quetta", "Islamabad"]

    const history = useHistory();
  const [user] = useAuthState(auth);


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
      console.log("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, [user]);

    // ! Sending data to Firebase
    const sendingToFirebaseHandler = async (myObj) => {
      await fetch('https://shipfair-a6766-default-rtdb.firebaseio.com/packages.json', {
        method:'POST',
        body: JSON.stringify({
          ...myObj
        })
      })
    };

    const sendingAllToFirebaseHandler = async (myObj) => {
      await fetch('https://shipfair-a6766-default-rtdb.firebaseio.com/all-packages.json', {
        method:'POST',
        body: JSON.stringify({
          ...myObj
        })
      })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // let id = Math.random()*1000000;
        pkgCtx.addPackage({ title, description, from, to });

        sendingToFirebaseHandler({ title, description, from, to, by: name, contact: user?.email })
        sendingAllToFirebaseHandler({ title, description, from, to, by: name, contact: user?.email })

        setTitle('');
        setDescription('');
        setFrom('Lahore');
        setTo('Islamabad');

        history.push('/parcels');
    };

    return (
        <> <div className="dashboard_greeting_container">
        <NavigationBar />
       </div>
        <div className="dashboard_container trips">
        <form onSubmit={submitHandler}>
            <h1 className="add_trip_heading">Add a Package</h1>
            <div>
                <label className="trip_input_labels "htmlFor="title">Title</label>
                <input  className="add_trip_input" type="text" id='title' required autoComplete='off' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <div className="add_trip_desc_container">

                <label className="trip_input_labels one" htmlFor="description">Description</label >
                <textarea className="add_trip_description" autoComplete='off' id="description" value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10" required></textarea>
                </div>
            </div>
            <div>
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
              > {
                cities.map((city)=> <option value={city}>{city}</option>)
              }
                {/* <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option> */}
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
                {cities.filter((city) =>(city!=from)).map( (city)=><option value="{city}">{city}</option>)}
                {/* <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option> */}
              </select>
            </div>
               
            </div>
            <div>
            <button className="button add_trip_submit">Submit</button>           </div>
        </form>
        <Footer/>
        </div>
        </>
    )
}

export default AddPackage;