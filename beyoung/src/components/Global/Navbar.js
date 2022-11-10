import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch, BiUser } from "react-icons/bi";
import logo from "../Images/BeYoung.png";

const User = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <BiUser />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem>My Account</MenuItem>
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
            <Link to="/signup">Login</Link>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

function Navbar() {
  console.log(logo);
  return (
    <div>
      {/* creating navbar with links */}
      <HStack gap={10} display="flex" justify="space-between" p={6} pt="2">
        {/* Left box of navabar */}
        <Flex gap={10} justify="space-between">
          <Link to="/">
            <Heading
              fontFamily="cursive"
              bgGradient="linear-gradient(90deg, rgba(29,28,28,1) 0%, rgba(111,107,107,1) 100%)"
              bgClip="text"
            >
              BeYoung
            </Heading>
          </Link>
          <Link to="/womens">Womens</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/">Home</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/why">WhyBeYoung</Link>
        </Flex>

        {/* right box of navabar */}
        <Flex gap={10} justify="center" align="center">
          <Link to="/cart">
            <AiOutlineShoppingCart />
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
