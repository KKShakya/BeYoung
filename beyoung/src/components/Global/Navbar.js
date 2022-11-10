import React from "react";
import {
  HStack,
  Flex,
  Image,
  MenuButton,
  Menu,
  MenuDivider,
  MenuItem,
  MenuGroup,
  MenuList,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch, BiUser } from "react-icons/bi";
const User = ()=>{
return <Menu isLazy>
<MenuButton>
  <BiUser />
</MenuButton>
<MenuList>

  <MenuGroup >
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
  <MenuGroup >
    <MenuItem><Link to='/signup'>Login</Link></MenuItem>
  </MenuGroup>
</MenuList>
</Menu>
}

function Navbar() {
  return (
    <div>
      {/* creating navbar with links */}
      <HStack gap={10} display='flex' justify='space-between' p={6} pt='2'>
        {/* Left box of navabar */}
        <Flex gap={10} justify="space-between">
          <Link to="/">

            <Image src="/Images/BeYoung.png" alt="Logo"></Image>
          </Link>
          <Link to="/womens">Womens</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/">Home</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/why">WhyBeYoung</Link>
        </Flex>

        {/* right box of navabar */}
        <Flex gap={10} justify='center' align='center'>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
          
          {/* chakra ui menutiem for user properties */}
         <User />
         <Center gap={1}><BiSearch />Search</Center>
        </Flex>
      </HStack>
    </div>
  );
}

export default Navbar;
