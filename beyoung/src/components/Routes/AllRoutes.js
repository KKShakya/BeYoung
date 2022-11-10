import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Signup from '../Global/Signup'
import Login from '../Global/Signup'
import Home from '../UserSide/Pages/Home'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/womens' element={<h1>womens</h1>}/>
        <Route path='/mens' element={<h1>mens</h1>}/>
        <Route path='/beauty' element={<h1>Beauty</h1>}/>
        <Route path='/kids' element={<h1>Kids</h1>}/>
        <Route path='/why' element={<h1>BeYoung</h1>}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes