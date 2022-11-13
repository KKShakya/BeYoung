import React from 'react'
import {Flex, Button,Center} from '@chakra-ui/react'
export default function Pagination({current,onChange}) {

  return (
    <div>
     <Flex gap={5} w='10%' m='auto' mt='2%'>
     <Button disabled ={current===1} onClick={()=>onChange(current-1)}>Prev</Button>
      <Center>{current}</Center>
      <Button disabled ={current===10} onClick={()=>onChange(current+1)}>Next</Button>
     </Flex>
    </div>
  )
}
