import React, { useState } from "react";
import { Grid, VStack, Flex, Box, Center, Heading } from "@chakra-ui/react";
import ProductItem from "./productItem";
// this page is for all the products passed values

function Products({ data }) {

 
  console.log(data);
  return (
    <div>
      <Grid templateColumns="1fr 4fr" mt="5%" scrollBehavior="smooth">
        <VStack
          border="1px solid #edebef"
          p={2}
          mr="10px"
        >
          <Heading as="h3">Seacrh</Heading>
          <Heading as="h3">Filter</Heading>
          <Heading as="h3">Sort</Heading>
          <Heading as="h3">Size</Heading>
        </VStack>
        <Grid templateColumns="repeat(4,1fr)" gap={10} border="1px solid #edebef" p={2}>
          {data && data.map((item) => {
            return (
              <ProductItem
                img={item.images[2]}
                title={item.title}
                price={item.discounted_price}
                subTitle={item.subtitle}
                rating={item.rating}
                ratingCount={item.rating_count}
              />
            );
          })}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Products;
