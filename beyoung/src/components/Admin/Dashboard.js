import React, { Component } from 'react'
import {Grid,GridItem} from '@chakra-ui/react'
import Sidebar from './sidebar'
import Navbar from './Navbar'
import Products from './Products'
import Customers from './Customers'
export default function Dashboard() {


  return (
    <div>
      <Grid templateColumns='2fr 4fr'>
         <Sidebar />
          <Navbar />
      </Grid>
    </div>
  )
}
