import React, { useState } from "react";
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
  Button,
  Checkbox,
} from "@chakra-ui/react";
import {
  BsFillBellFill,
  BsFillHandbagFill,
  BsFillHeartFill,
  BsTrophyFill,
} from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

import { set_users } from "./Axios/Api";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    subscription: "",
  });
const [token,setToken] = useState(false);

  // user validator checking if user exist or not on api

 if(token){
alert('succesfully signed up')
  return <Navigate to='/login' />
 }

  const validateUSer = (username) => {
    axios
      .get("https://confused-lime-puffer.cyclic.app/users"+"?email="+username)
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data.length);
          alert("user already exist");
        }else{
          set_users(email,password,subscription).then((res)=>{
            console.log(res);
          }).catch((err)=>console.log(err));
          setToken(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    validateUSer(email);
    
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setUser({ ...user, [name]: val });
  };

  const { email, password, subscription } = user;
  return (
    <div>
      <Button
        variant="link"
        position="relative"
        top="1.3em"
        right={{
          sm: "-350",
          md: "-270",
          lg: "-450",
        }}
      >
        <Link to="/">X</Link>
      </Button>
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
            Create account
          </Text>
          <Text>Unleash your shopping power</Text>
          <Text>
            Check <b>BeYoung</b> before you buy.
          </Text>

          {/* form ellemetnt datat */}
          <FormControl w="60%" m="auto" mt="20px">
            <Input
              m={2}
              type="email"
              name="email"
              placeholder="Enter Email address"
              value={email}
              onChange={handleChange}
            />
            <Input
              m={2}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              isRequired="true"
            />
            <Checkbox
              size="sm"
              type="checkbox"
              name="subscription"
              value={subscription}
              onChange={handleChange}
            >
              Subscribe to personalized sale offers and updates
            </Checkbox>
            <Input
              m={2}
              onClick={handleSubmit}
              type="submit"
              value="SIGN UP"
              color="white"
              bgGradient="linear-gradient(90deg, rgba(29,28,28,1) 0%, rgba(111,107,107,1) 100%)"
            />
          </FormControl>

          <Text m={5}>or</Text>
          {/* Four icons google,aple,facebook,wechat */}
          <Flex justify="center" gap={20} fontSize="1.7rem">
            <FaGoogle color="red" />
            <FaFacebookF color="#3182ce" />
            <FaApple />
          </Flex>

          {/* if account exist signin */}
          <Text m={2}>
            <Link to="/login">Already have an account?Sign In</Link>
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Signup;
