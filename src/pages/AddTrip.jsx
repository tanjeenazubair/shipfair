import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FeedContext } from '../context/feed-context';

const AddTrip = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [from, setFrom] = useState('Lahore');
    const [to, setTo] = useState('Islamabad');

    const pkgCtx = useContext(FeedContext);

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        pkgCtx.addTrips({ title, description, from, to });
        setTitle('');
        setDescription('');
        setFrom('Lahore');
        setTo('Islamabad');

        history.push('/trips');
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>Add a Trip</h1>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' autoComplete='off' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea autoComplete='off' id="description" value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="from">From</label>
                <select name="" value={from} id="from" onChange={e => setFrom(e.target.value)}>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Multan">Multan</option>
                </select>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <select name="" value={to} id="to" onChange={e => setTo(e.target.value)}>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Multan">Multan</option>
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default AddTrip
