import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Signup from '../Global/Signup'
import Login from '../Global/login'
import Home from '../UserSide/Pages/Home'
import Womens from '../UserSide/Pages/Womens'
import Mens from '../UserSide/Pages/mens'
import Kids from '../UserSide/Pages/kids'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/womens' element={<Womens />}/>
        <Route path='/mens' element={<Mens />}/>
        <Route path='/beauty' element={<h1>Beauty</h1>}/>
        <Route path='/kids' element={<Kids />}/>
        <Route path='/why' element={<h1>BeYoung</h1>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes