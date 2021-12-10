import { createContext } from "react";

export const FeedContext = createContext({
    items: [],
    packages: [],
    trips: [],
    addItem: (newItem) => {},
    removeItem: (id) => {},
    addPackage: (newPkg) => {},
    removePackage: (id) => {},
    addTrips: (newTrip) => {},
    removeTrip: (id) => {},
});