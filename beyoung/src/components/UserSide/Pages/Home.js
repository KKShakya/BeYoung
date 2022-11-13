import React from "react";
import ImageSlider from "../../Global/ImageSlider";
import images from "../../Images/images";
import {
  Center,
  Box,
  Flex,
  GridItem,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import images1 from "../../Images/images1";
import images2 from "../../Images/images2";
function Home() {
  return (
    <div>
      <ImageSlider images={images} scroll="1" slides="1" />
      <Box mt="5%" textAlign="center">
      <Center fontSize={'2rem'} fontFamily='serif' fontWeight={'bold'}>Featured Partners</Center>
        <Text color="gray" fontSize="xl">
          Compare across our 500+ partner stores to find the products you want
          at the best price.
        </Text>
      </Box>
      <Flex flexWrap="wrap" gap={3} m="auto" pl={10} h="20%">
        {images1.map((item) => (
          <Box h="20%" w="8%">
            <Image src={item.src} alt={item.alt} />
          </Box>
        ))}
      </Flex>
      <Text
        mt="2%"
        borderBottom={"1px solid gray"}
        lineHeight="0.1em"
        textAlign={"center"}
      >
        <Text as="span" p="0 10px" bg="#fff" fontSize="1.2rem" fontWeight="500">
          Special Offers
        </Text>
      </Text>

      {/* grid of offers */}
      <Grid m="5% auto auto" templateColumns="repeat(3,1fr)" w="70%"  gap={10}>
        {images2.map((item) => {
          return (
            <Box>
              <Image src={item.src} alt={item.alt} />
              <Text mt="10px" fontSize={'1.2rem'}>{item.title}</Text>
              <Text color="gray" fontSize="1.2rem">
                {item.subtitle}
              </Text>
              <Button mt='20px'variant="solid">
                Shop Now
              </Button>
            </Box>
          );
        })}
      </Grid>

{/* download the app */}
    <VStack bg='#f8f7f6' p={10} mt='5%'>
      <Heading>Download the</Heading>
      <Heading>BeYoung App</Heading>
      <Text color="gray">A seamless experience that takes your style
to the next level</Text>
<Button mt='40px'variant="solid" bg='black' color='white' p={5} >
                Download
              </Button>
              <Image mt='20%'src='https://cdn.modesens.com/static/img/20220826appdownload_en.svg'/>
    </VStack>
    </div>
  );
}

export default Home;
