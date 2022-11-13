import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initalsate ={
  isAuth:false,
  isError:false,
  isLoading:true,
  isAdmin:false,
  data:""
}

export const AuthContext = createContext();
export default function AuthContextProvider({children}) {
  const [state,dispatch] = useReducer(reducer,initalsate);
  return <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>;
}
