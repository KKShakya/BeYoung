import React from "react";
import { Button, Flex, Grid, Text, Center, Container } from "@chakra-ui/react";
import { HiOutlineUser, HiTag } from "react-icons/hi";
export default function Sidebar() {
  
  return (
    <div>
      <Container  ml="-1em" boxShadow='lg' height='700px'>
        <Flex m="5" gap={5}>
          <Button
            fontFamily={"cursive"}
            bg="black"
            variant="ghost"
            color="white"
          >
            BY
          </Button>
          <Text as="span" fontFamily="cursive">
            BeYoung
          </Text>
        </Flex>
        <Grid templateRows="repeat(4,1fr)" gap={5} mt="10%" ml='-15em'>
          <Center gap={3}>
            <HiTag />
            <Text>Products</Text>
          </Center>
          <Center gap={3}>
            <HiOutlineUser />
            <Button variant='link'>Customers</Button>
          </Center>
        </Grid>
      </Container>
    </div>
  );
}
