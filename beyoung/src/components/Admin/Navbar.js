import React from 'react'
import {InputGroup,Stack,Input,InputRightAddon,InputLeftAddon,Button,Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillQuestionCircle, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'

export default function Navbar() {
  return (
    <div >

     <Stack spacing={4} direction='row'>
  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
  <InputGroup size='md'>
    <InputLeftAddon children={<AiOutlineSearch />} />
    <Input placeholder='Seacrh' />
  </InputGroup>

  <Flex gap={5} justify="center" align="center" mr={10}>
          <Link to="/cart">
            <AiFillQuestionCircle />
          </Link>

          {/* chakra ui menutiem for user properties */}
          {/* <User /> */}
          <Button borderRadius='50%' bg='red.200'>M</Button>
        </Flex>
</Stack>
    </div>
  )
}
