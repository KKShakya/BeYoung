import { Box, Grid, VStack, Text, Button, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../../Context/cartContext/CartContext";
import ProductItem from "./productItem";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <Text fontSize="5xl" color="#393E46">
        Your shopping Cart
      </Text>
      <Grid templateColumns="4fr 1fr" w="80%" m="auto" gap={10}>
        <VStack >
          {/* each item display */}
          {state.map((item) => (
            <Grid templateColumns="1fr 3fr" p={5} borderBottom={"1px solid #474E68"}>
              <Image src={item.images[0]} alt={item.title} h="200px" />
              <VStack spacing='20px' fontSize={'1.3rem'} mt='10%'>
                <Text>{item.title}</Text>
                <Text>Rs. {item.strike_price}</Text>
                <Button >Remove</Button>
              </VStack>
            </Grid>
          ))}
        </VStack>
        <VStack>
          <Text color='red' fontSize={'1.5rem'} fontFamily='cursive'>Subtotal = <Button bg='#404258'>Rs.{Math.round(state.reduce((a,c)=>a+Number(c.strike_price),0))}</Button></Text>
          <Button>Checkout</Button>
        </VStack>
      </Grid>
    </div>
  );
}

export default Cart;
