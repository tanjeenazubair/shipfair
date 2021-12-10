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

const DUMMY_PACKAGES = [
    {
        id: 'p1',
        title: 'Business Package',
        description: 'A business package sending to abroad',
        url: 'https://media.istockphoto.com/photos/woman-completing-orders-by-laptop-picture-id1273940722?b=1&k=20&m=1273940722&s=170667a&w=0&h=oc_3sSIwK3hTCN9AckJERMlzXtbor1WHwSt6T1NNdlw='
    },
    {
        id: 'p2',
        title: 'Food Package',
        description: 'A food package sending to abroad',
        url: 'https://thumbs.dreamstime.com/b/sustainable-recyclable-takeaway-food-packaging-counter-coffee-shop-218679884.jpg'
    },
]

const DUMMY_TRIPS = [
    {
        id:"t1",
        title:"Lahore Trip",
        description:"Trip to Lahore",
        url:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/countries-drive-from-india-cover2.jpg"
    },
    {
        id:"t2",
        title:"Islamabad Trip",
        description:"Trip to Islamabad",
        url:"https://static.toiimg.com/photo/77333563.cms"
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

const packagesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PACKAGE':
            let newFeed = [ ...state, action.payload]
            return newFeed
        case 'REMOVE_PACKAGE':
            let newPackages = state.filter(item => item.id !== action.payload)
            return newPackages;
            
        default:
            break;
    }
    return state;
};

const tripsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            let newTrips = [ ...state, action.payload]
            return newTrips
        case "REMOVE_TRIP":
            let newPackages = state.filter(item => item.id !== action.payload)
            return newPackages;
    
        default:
            break;
    }
    return state;
};


export const FeedProvider = (props) => {

    const [feedState, dispatchFeedAction] = useReducer(feedReducer, DUMMY_FEED_DATA);
    const [packagesState, dispatchPackageAction] = useReducer(packagesReducer, DUMMY_PACKAGES);
    const [tripsState, dispatchTripAction] = useReducer(tripsReducer, DUMMY_TRIPS);

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
    }

    const addToTripsHandler = trip => {
        dispatchTripAction({
            type: 'ADD_TRIP',
            payload: trip
        })
    }

    const removeFromFeedHandler = (id) => {
        dispatchFeedAction({
            type: 'REMOVE_FROM_FEED',
            payload: id
        })
    };

    const removeFromPackagesHandler = id => {
        dispatchPackageAction({
            type: 'REMOVE_PACKAGE',
            payload: id
        })
    };
    const removeFromTripsHandler  = id => {
        dispatchTripAction({
            type: "REMOVE_TRIP",
            payload:id
        })

    }

    return (
        <FeedContext.Provider value={{items:feedState, packages: packagesState,trips:tripsState, addItem:addToFeedHandler, removeItem:removeFromFeedHandler, removePackage: removeFromPackagesHandler,removeTrip:removeFromTripsHandler, addPackage: addToPackagesHandler, addTrips: addToTripsHandler}}>
        {props.children}       
        </FeedContext.Provider>
    )
}
