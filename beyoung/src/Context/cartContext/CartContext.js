import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
export const CartContext = createContext();

const initialstate = [];

export default function CartContextProvider({children}) {
  const [state,dispatch] = useReducer(reducer,initialstate);

  return <CartContext.Provider value={{state,dispatch}}>
    {children}
  </CartContext.Provider>
}

