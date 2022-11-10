import React from 'react'
import  axios  from 'axios'
   const baseURl = 'http://localhost:8080/clothing'
export const getData = (category,page=1)=>{
   return axios.get(baseURl,{params:{category:category,_page:page,_limit:12}})
}