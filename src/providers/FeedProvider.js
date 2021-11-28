import React, { useReducer } from 'react';
import { FeedContext } from '../context/feed-context';

const feedReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_FEED':
            let updatedFeed = [ ...state.items, action.payload]
            return {items: updatedFeed};
        case 'REMOVE_FROM_FEED':
            let newFeed = state.items.filter(item => item.id !== action.payload)
            return {items: newFeed};
        default:
            return state;
    }
};

export const FeedProvider = (props) => {

    const [feedState, dispatchFeedAction] = useReducer(feedReducer, {items:[]});

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
