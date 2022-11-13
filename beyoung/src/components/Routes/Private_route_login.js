import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/LoginContext/AuthContext';

function Private_Route({children}) {
  const {state} = useContext(AuthContext)
  if(!state.isAuth){
    return <Navigate to="/signup"/>
  }
  return children;
}

export default Private_Route