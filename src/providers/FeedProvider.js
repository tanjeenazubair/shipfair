import React, { useReducer } from 'react';
import { FeedContext } from '../context/feed-context';

const feedReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_FEED':
            let updatedFeed = [ ...state, action.payload]
            localStorage.setItem('feed', JSON.stringify(updatedFeed));
            return updatedFeed;
        case 'REMOVE_FROM_FEED':
            let newFeed = state.filter(item => item.id !== action.payload)
            localStorage.setItem('feed', JSON.stringify(newFeed));
            return newFeed;
        default:
            return state;
    }
};

const packagesReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_PACKAGE':
            let newFeed = [ ...state, action.payload]
            localStorage.setItem('packages', JSON.stringify(newFeed));
            return newFeed
        case 'REMOVE_PACKAGE':
            let newPackages = state.filter(item => item.id !== action.payload)
            localStorage.setItem('packages', JSON.stringify(newPackages));
            return newPackages;
        case 'UPDATE_PKGS_FROM_FIREBASE':
            localStorage.setItem('packages', JSON.stringify(action.payload));
            return action.payload
            
        default:
            break;
    }
    return state;
};

const tripsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            let newTrips = [ ...state, action.payload]
            localStorage.setItem('trips', JSON.stringify(newTrips));
            return newTrips
        case "REMOVE_TRIP":
            let newPackages = state.filter(item => item.id !== action.payload)
            localStorage.setItem('trips', JSON.stringify(newPackages));
            return newPackages;
        case "UPDATE_TRIPS_FROM_FIREBASE":
            localStorage.setItem('trips', JSON.stringify(action.payload));
            return action.payload
    
        default:
            break;
    }
    return state;
};


export const FeedProvider = (props) => {

    const [packagesState, dispatchPackageAction] = useReducer(packagesReducer, JSON.parse(localStorage.getItem('packages')) || []);

    const [tripsState, dispatchTripAction] = useReducer(tripsReducer, JSON.parse(localStorage.getItem('trips')) || []);

    const [feedState, dispatchFeedAction] = useReducer(feedReducer, JSON.parse(localStorage.getItem('feed')) || []);

    const addToFeedHandler = (item) => {
        dispatchFeedAction({
            type:'ADD_TO_FEED',
            payload: item})
    }

    const addToPackagesHandler = pkg => {
        dispatchPackageAction({
            type: 'ADD_PACKAGE',
            payload: pkg
        })
        dispatchFeedAction({
            type:'ADD_TO_FEED',
            payload: pkg})
    }

    const addToTripsHandler = trip => {
        dispatchTripAction({
            type: 'ADD_TRIP',
            payload: trip
        })
        dispatchFeedAction({
            type:'ADD_TO_FEED',
            payload: trip})
    }

    const removeFromFeedHandler = (id) => {
        dispatchFeedAction({
            type: 'REMOVE_FROM_FEED',
            payload: id
        })
        dispatchPackageAction({
            type: 'REMOVE_PACKAGE',
            payload: id
        })
        dispatchTripAction({
            type: "REMOVE_TRIP",
            payload:id
        })
    };

    const removeFromPackagesHandler = id => {
        dispatchPackageAction({
            type: 'REMOVE_PACKAGE',
            payload: id
        })
        dispatchFeedAction({
            type: 'REMOVE_FROM_FEED',
            payload: id
        })
    };
    const removeFromTripsHandler  = id => {
        dispatchTripAction({
            type: "REMOVE_TRIP",
            payload:id
        })
        dispatchFeedAction({
            type: 'REMOVE_FROM_FEED',
            payload: id
        })
    }

    const updatePkgsUsingFirebase = pkgs => {
        dispatchPackageAction({
            type: 'UPDATE_PKGS_FROM_FIREBASE',
            payload: pkgs
        })

    }

    const updateTripsUsingFirebase = trips => {
        dispatchPackageAction({
            type: 'UPDATE_TRIPS_FROM_FIREBASE',
            payload: trips
        })

    }

    return (
        <FeedContext.Provider value={{items:feedState, packages: packagesState,trips:tripsState, addItem:addToFeedHandler, removeItem:removeFromFeedHandler, removePackage: removeFromPackagesHandler,removeTrip:removeFromTripsHandler, addPackage: addToPackagesHandler, addTrips: addToTripsHandler, updatePkgs: updatePkgsUsingFirebase, updateTrips: updateTripsUsingFirebase}}>
        {props.children}       
        </FeedContext.Provider>
    )
}
