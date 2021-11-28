import { createContext } from "react";

export const FeedContext = createContext({
    items: [],
    addItem: (newItem) => {},
    removeItem: (id) => {}
});