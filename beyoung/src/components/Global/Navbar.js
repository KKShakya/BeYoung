import React, { useContext } from "react";
import {
  HStack,
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuDivider,
  MenuItem,
  MenuGroup,
  MenuList,
  Center,
  Heading,
  Box,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch, BiUser } from "react-icons/bi";
import { CartContext } from "../../Context/cartContext/CartContext";
import { AuthContext } from "../../Context/LoginContext/AuthContext";
import { Logout } from "../../Context/LoginContext/actions";

const User = () => {
 
const{state,dispatch} = useContext(AuthContext);
// {logout is implemented in navbar}
  return (
    <Menu isLazy>
      <MenuButton>
        <BiUser />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem color='red' fontSize='2rem' fontFamily='cursive'>
          {state.isAuth?state.data.email:"My Account"}
          </MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup>
          <MenuItem>My Recently Viewed</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup>
          <MenuItem>My Closet</MenuItem>
          <MenuItem>My Orders</MenuItem>
          <MenuItem>My Loyalty</MenuItem>
          <MenuItem>My Messages</MenuItem>
          <MenuItem>Invite Friends</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>

        <MenuDivider />
        <MenuGroup>
          <MenuItem>
            {state.isAuth?<Button variant="link" onClick={()=>dispatch(Logout())}><Link to="/">Logout</Link></Button>:<Link to="/signup">Login</Link>}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

function Navbar() {
  const { state } = useContext(CartContext);

  // console.log(logo);
  return (
    <div>
      {/* creating navbar with links */}
      <HStack gap={10} display="flex" justify="space-between" p={6} pt="2">
        {/* Left box of navabar */}
        <Flex gap={10} justify="space-between">
          <Link to="/">
            <Heading
              mt={-2}
              fontFamily="cursive"
              bgGradient="linear-gradient(90deg, rgba(29,28,28,1) 0%, rgba(111,107,107,1) 100%)"
              bgClip="text"
            >
              BeYoung
            </Heading>
          </Link>
          <Link to="/womens">Womens</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/">Home</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/why">WhyBeYoung</Link>
        </Flex>

        {/* right box of navabar */}
        <Flex gap={10} justify="center" align="center">
          <Link to="/cart">
            <Box size='lg' display='flex'>
              <AiOutlineShoppingCart />
              <Text as='span'color="red" position="relative" right={-1} top={-1}>
                ({state.length})
              </Text>
            </Box>
          </Link>

          {/* chakra ui menutiem for user properties */}
          <User />
          <Center gap={1}>
            <BiSearch />
            Search
          </Center>
        </Flex>
      </HStack>
    </div>
  );
}

export default Navbar;
