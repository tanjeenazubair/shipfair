import React, { useReducer } from 'react';
import { FeedContext } from '../context/feed-context';

const DUMMY_FEED_DATA = [
    {
        id:'item1',
        title: 'Lahore to Islamabad',
        url: 'https://image.shutterstock.com/image-photo/islamabad-capital-city-pakistan-administered-260nw-1972406885.jpg',
        description: 'Sending package from Lahore to Islamabad'
    },
    {
        id:'item2',
        title: 'Islamabad to Lahore',
        url: 'https://i.tribune.com.pk/media/images/2137970-minarepakistanx-1579108090/2137970-minarepakistanx-1579108090.jpg',
        description: 'Sending package from Islamabad to Lahore'
    },
    {
        id:'item3',
        title: 'Lahore to Multan',
        description: 'Sending package from Lahore to Multan'
    },
    {
        id:'item4',
        title: 'Quetta to Multan',
        description: 'Sending package from Quetta to Multan'
    }
]

const feedReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_FEED':
            let updatedFeed = [ ...state.items, action.payload]
            return updatedFeed;
        case 'REMOVE_FROM_FEED':
            let newFeed = state.filter(item => item.id !== action.payload)
            return newFeed;
        default:
            return state;
    }
};

export const FeedProvider = (props) => {

    const [feedState, dispatchFeedAction] = useReducer(feedReducer, DUMMY_FEED_DATA);

    const addToFeedHandler = (item) => {
        dispatchFeedAction({
            type:'ADD_TO_FEED',
            payload: item})
    }

    const removeFromFeedHandler = (id) => {
        dispatchFeedAction({
            type: 'REMOVE_FROM_FEED',
            payload: id
        })
    };

    return (
        <FeedContext.Provider value={{items:feedState, addItem:addToFeedHandler, removeItem:removeFromFeedHandler}}>
        {props.children}       
        </FeedContext.Provider>
    )
}
