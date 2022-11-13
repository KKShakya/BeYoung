import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Signup from '../Global/Signup'
import Login from '../Global/login'
import Home from '../UserSide/Pages/Home'
import Womens from '../UserSide/Pages/Womens'
import Mens from '../UserSide/Pages/mens'
import Kids from '../UserSide/Pages/kids'
import WhyBeyoung from '../UserSide/Pages/whyBeyoung'
import Cart from '../UserSide/Pages/Cart'
import Private_Route from './Private_route_login'
import Dashboard from '../Admin/Dashboard'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/womens' element={
        <Womens />
        }/>
        <Route path='/mens' element={<Mens />}/>
  
        <Route path='/kids' element={<Kids />}/>
        <Route path='/why' element={<WhyBeyoung / >}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={
        <Private_Route>
        <Cart />
        </Private_Route>

        }/>
        <Route path='/dashboard' element= {<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes