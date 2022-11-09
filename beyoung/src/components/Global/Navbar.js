import React from 'react'
import {HStack,Flex,Image} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <HStack gap={10}>
        <Flex>
         
          <Link to='/'> <Image  src='./beyoung\src\components\Images\Be Young.png' alt='Logo'></Image></Link>
        </Flex>
        <Flex></Flex>
      </HStack>
    </div>
  )
}

export default Navbar