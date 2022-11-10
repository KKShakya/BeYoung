import React from 'react'
import {Box,Image,Text,Heading,Center,Button} from '@chakra-ui/react'
import {AiFillStar} from 'react-icons/ai'
 export default function ProductItem({img,title,rating,ratingCount,price,subTitle}) {
  return (
    <div>
      <Box boxShadow='lg'>
        <Image src={img} alt={title} w='100%' m='auto'/>
         <Text as='span' left='0' top={20}>{rating} <AiFillStar />| {ratingCount}</Text>
         <Center>{title}</Center>
         <Center>{subTitle}</Center>
         <Text>{price}</Text>
         <Button variant='ghost' color="#393E46">Add To Cart</Button>
      </Box>
    </div>
  )
}
