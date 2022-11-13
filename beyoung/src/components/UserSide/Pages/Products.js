import React, { useState } from "react";
import {
  Grid,
  VStack,
  Flex,
  Box,
  Center,
  Heading,
  Select,
} from "@chakra-ui/react";
import ProductItem from "./productItem";
import { getData } from "../../Global/Axios/Api";
// this page is for all the products passed values

function Products({ data, page }) {
  
  console.log(data);
  return (
    <div>
      <Grid templateColumns=" 4fr"  scrollBehavior="smooth">
        <Grid
          templateColumns="repeat(4,1fr)"
          gap={10}
          border="1px solid #edebef"
          p={2}
        >
          {data &&
            data.map((item) => {
              return (
                <ProductItem
                  img={item.images[2]}
                  title={item.title}
                  price={item.strike_price}
                  subTitle={item.subtitle}
                  rating={item.rating}
                  ratingCount={item.rating_count}
                  item={item}
                />
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
