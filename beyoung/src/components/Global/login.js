import React, { useContext, useState } from "react";
import {
  Grid,
  VStack,
  Text,
  Heading,
  Input,
  GridItem,
  Center,
  FormControl,
  Button,
} from "@chakra-ui/react";
import {
  BsFillBellFill,
  BsFillHandbagFill,
  BsFillHeartFill,
  BsTrophyFill,
} from "react-icons/bs";

import { HiDocumentText } from "react-icons/hi";
// import {  FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/LoginContext/AuthContext";
import {
  login_Failure,
  login_Successfull,
} from "../../Context/LoginContext/actions";


export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [logindetails, setLoginDetails] = useState({ email: "", password: "" });
  const [token,setToken] = useState(false);
  
if(token){
  return <Navigate to='/' />
}
console.log(token);

  const validateLogin = async (username, pwd) => {
    console.log(username);
   await  axios
      .get(`https://confused-lime-puffer.cyclic.app/users?email=${username}`, {
        params: {
          password: pwd,
        }
      })
      
      .then((res) => {
        if (res.data.length > 0) {
          alert("logged in");
          dispatch(login_Successfull(res.data[0]));
          setToken(true);
        } else {
          alert("Plaease enter correct details");
        }
      })
      .catch((err) => {
        dispatch(login_Failure());
        console.log(err);
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(logindetails);
      validateLogin(email, password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginDetails({ ...logindetails, [name]: value });
    };
    
    const { email, password } = logindetails;
    
    console.log(state.data);
    
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
              F
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
            />
            <Input
              m={2}
              onClick={handleSubmit}
              type="submit"
              value="Log In"
              color="white"
              bgGradient="linear-gradient(90deg, rgba(29,28,28,1) 0%, rgba(111,107,107,1) 100%)"
            />
          </FormControl>
          <Link to="/Signup">Create account?Sign up</Link>
        </GridItem>
      </Grid>
    </div>
  );
}
