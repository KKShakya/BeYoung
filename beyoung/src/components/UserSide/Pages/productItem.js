import React, { useContext } from 'react'
import {Box,Image,Text,Center,Button} from '@chakra-ui/react'
import {AiFillStar} from 'react-icons/ai'
import { CartContext } from '../../../Context/cartContext/CartContext'
import { AddtoCart } from '../../../Context/cartContext/acions';
 export default function ProductItem({img,title,rating,ratingCount,price,subTitle,item}) {
const {state,dispatch} = useContext(CartContext);

const itemAlreadyexist = (subtitle,state)=>{
  if(state.find((item)=>item.subtitle===subtitle)){
    return true;
  }
}
// console.log(state);
  return (
    <div>
      <Box boxShadow='lg' display={'flex'} flexDirection='column' gap={3}>
        <Image src={img} alt={title} w='100%' m='auto'/>
         <Box as='span' left='0' top={20} ><Center display='flex' gap={1} color={'red'}><AiFillStar />{rating}  || {ratingCount}</Center></Box>
         <Center fontSize={'1.2rem'} color='gray.700'>{title}</Center>
         <Center color='gray.400'>{subTitle}</Center>
         <Text>Rs. {price}/-</Text>
         <Button variant='ghost' color="#393E46" disabled ={itemAlreadyexist(item.subtitle,state)} onClick={()=>dispatch(AddtoCart(item))} >Add To Cart</Button>
      </Box>
    </div>
  )
}
