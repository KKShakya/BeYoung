import React from "react";
import {
  Grid,
  VStack,
  Text,
  Heading,
  Input,
  Flex,
  GridItem,
  Center,
  FormControl,
  Button,Checkbox
} from "@chakra-ui/react";
import {
  BsFillBellFill,
  BsFillHandbagFill,
  BsFillHeartFill,
  BsTrophyFill,
} from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import {  FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
       <Button variant='link'
        position='relative' top='1.3em' right={{
          sm:'-350',
          md:'-270',
          lg:'-450'
        }}  ><Link to='/'>X</Link></Button>
      <Grid templateColumns="1fr 1fr" w="60%" m="auto">
        {/* left side of the page */}
        <GridItem border="1px solid black" bg="black" color="white">
          <Heading mt="20%" as="h1" fontSize="4rem">
            BeYoung
          </Heading>
          <Text as="p">Wear your look, BeUnique</Text>
          <VStack
            mt="10%"
            fontSize="1.1rem"
            textTransform="uppercase"
            gap={3}
            alignItems="start"
            w="65%"
            m="9% auto 20%"
          >
            <Center gap={3}>
              <BsFillHandbagFill />
              <Text>comapre acroos 500+ stores</Text>
            </Center>
            <Center gap={3}>
              <BsFillBellFill />
              <Text>Get Alerts on your Items</Text>
            </Center>
            <Center gap={3}>
              <HiDocumentText />
              <Text>save your searches</Text>
            </Center>
            <Center gap={3}>
              <BsFillHeartFill />
              <Text>Manage your shopping list</Text>
            </Center>
            <Center gap={3}>
              <BsTrophyFill />
              <Text>Earn Points</Text>
            </Center>
          </VStack>
        </GridItem>

        {/* ?Login form and details */}
        <GridItem border="1px solid red">
          <Text mt="10%" mb="5%">
            Log In
          </Text>
         

          {/* form ellemetnt datat */}
          <FormControl w='60%' m='auto' mt='20px'>
            <Input  type="email"  placeholder="Enter Email address"/>
            <Input  type="password"  placeholder="Password"/>
            <Input type="submit" value='Log In' colorScheme='gray'/>
          </FormControl>
          <Link to='/Signup'>Create account?Sign up</Link>
        </GridItem>
      </Grid>
    </div>
  )
}
