import React from "react"

const productsContext = React.createContext({});

export const productsProvider = productsContext.Provider;
export default productsContext;
