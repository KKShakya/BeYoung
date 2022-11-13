import {
  Flex,
  Grid,
  Text,
  Box,
  VStack,
  Center,
  FormControl,
  HStack,
  Input,
  Link,
  Radio,
  RadioGroup,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SiDiscord, SiFacebook, SiInstagram, SiPinterest, SiReddit, SiTwitter, SiWechat } from "react-icons/si";
export default function Footer() {
  return (
    <div>
      <Box mt="2%" mb={'1%'} borderBottom={'0.1px solid gray'} p={10} borderTop={'0.1px solid gray'}>
        <Grid gap={20} templateColumns="repeat(5,1fr)">
          {/* item 1 */}
          <VStack>
            <Center
              textTransform={"uppercase"}
              fontWeight="400"
              fontSize="1.1rem"
            >
              Customer care
            </Center>
            <Box textAlign="start" pl={4}>
              <Link color="gray">Shopper Protection</Link>
              <br />
              <Link color="gray">Loyalty Program</Link>
              <br />
              <Link color="gray">Help Center</Link>
              <br />
              <Link color="gray">Size Guides</Link>
              <br />
              <Link color="gray">Contact Us / Feedback</Link>
              <br />
              <Link color="gray">Shipping / Returns</Link>
              <br />
            </Box>
          </VStack>
          {/* item 2 */}
          <VStack>
            <Center
              textTransform={"uppercase"}
              fontWeight="400"
              fontSize="1.1rem"
            >
              INFORMATION
            </Center>
            <Box textAlign="start" pl={4}>
              <Link color="gray">About Us</Link>
              <br />
              <Link color="gray">Influencer Program</Link>
              <br />
              <Link color="gray">Partner Stores</Link>
              <br />
              <Link color="gray">Sitemap</Link>
              <br />
            </Box>
          </VStack>
          {/* item 3 */}
          <VStack>
            <Text
              textTransform={"uppercase"}
              fontWeight="400"
              fontSize="1.1rem"
            >
              LEGAL
            </Text>
            <Box textAlign="start">
              <Link color="gray">Terms Of Use</Link>
              <br />
              <Link color="gray">Disclosure</Link>
              <br />
              <Link color="gray">Privacy Policy</Link>
              <br />
              <Link color="gray">Community Guidelines</Link>
              <br />
            </Box>
          </VStack>
          {/* item 4 */}
          <VStack>
            <Center
              textTransform={"uppercase"}
              fontWeight="400"
              fontSize="1.1rem"
            >
              CONNECT WITH US
            </Center>
            <Flex gap={8} fontSize={40}>
              <AiFillApple />
              <AiFillAndroid />
              <IoExtensionPuzzle />
            </Flex>
          </VStack>
          {/* item 5 */}
          <VStack>
            <Center
              textTransform={"uppercase"}
              fontWeight="400"
              fontSize="1.1rem"
            >
              NEWSLETTER SIGN UP
            </Center>

            <FormControl>
              <Input
                type="email"
                variant="flushed"
                placeholder="Email Address"
              />
              <RadioGroup>
              <HStack spacing="24px">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </HStack>
              </RadioGroup>
              <Input mt='10%'type='submit' value='Submit' bg='black' color='#fff'/>
            </FormControl>
          </VStack>
        </Grid>
      </Box>
      <Flex justify={'center'} align='center' fontSize={'1.2rem'} mb='10px' gap={5}>
      <Heading
              mr='auto'
              fontFamily="cursive"
              bgGradient="linear-gradient(90deg, rgba(29,28,28,1) 0%, rgba(111,107,107,1) 100%)"
              bgClip="text"
            >
              BeYoung
            </Heading>
        <Box ><SiPinterest /></Box>
        <Box ><SiFacebook /></Box>
        <Box ><SiTwitter /></Box>
        <Box ><SiInstagram /></Box>
        <Box ><SiWechat /></Box>
        <Box ><SiDiscord /></Box>
        <Box ><SiReddit /></Box>
      </Flex>
    </div>
  );
}
