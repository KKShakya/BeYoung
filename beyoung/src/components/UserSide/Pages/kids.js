import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";
import { Box, Center, CircularProgress,VStack,Select,Grid } from "@chakra-ui/react";
import Pagination from "../../Global/Pagination";
export default function Kids() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [order, setOrder] = useState("asc");
  const [page,setPage] = useState(1);
  
  // const handleChangePrice = async(e) => {
  //   setOrder(e.target.value);
  //   let change = await getData("Child", page, "strike_price", order)
  //   .then((res)=> {return res.data})
  //   .catch((err)=>console.log(err))

  //   setData(change);
  // };
  


  useEffect(() => {
    setLoading(true);
    getData("Child", page)
      .then((res) => {
        console.log(res);
        setLoading(false)
      setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  if(loading) {return <CircularProgress thickness='400px'size='10rem'isIndeterminate color='black' mt='10%'/>}
  return (
    <div>

<Box ml={'20%'}>
      <Center fontSize={'1.3rem'} fontFamily='garamond' fontWeight={'bold'}>Designer Clothing For Kids</Center>
      <Center color="gray.600" fontSize="1.2rem">
        Shop designer clothing for kids with price comparison across 500+ stores
        in one place. Discover the latest designer clothing for kids at
        BeYoung.
      </Center>
      </Box>
      <Grid templateColumns="1fr 4fr" mt="5%" scrollBehavior="smooth">
        <VStack border="1px solid #edebef" p={2} mr="10px" >
          <Box borderBottom={"1px solid red"}>
            <Center color="gray.600">filter</Center>
            <Select
              variant="flushed"
              placeholder="Sort by price"
              // onChange={handleChangePrice}
            >
              <option value="asc">low to high</option>
              <option value="desc"> high to low</option>
              {/* <option value='discounted_price'></option>
         <option value='discounted_price'>price high to low</option> */}
            </Select>
          </Box>


          <Box borderBottom={"1px solid red"}>
            
            <Select
              variant="flushed"
              placeholder="Sort by rating"
              // onChange={handleChangePrice}
            >
              <option value="asc"> low to high</option>
              <option value="desc"> high to low</option>
              {/* <option value='discounted_price'></option>
         <option value='discounted_price'>price high to low</option> */}
            </Select>
          </Box>
        </VStack>
      <Products data={data} /></Grid>
      <Pagination current={page} onChange={(page)=>setPage(page)}/>
    </div>
  )
}
