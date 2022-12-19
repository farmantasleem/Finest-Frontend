
import { Container, Heading, Stack, VStack,Button } from '@chakra-ui/react';
import {BsFillCartFill,BsFillBasket3Fill,} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"

import {BiHomeHeart} from "react-icons/bi"
import {MdAddCircle} from "react-icons/md"
import { Route,Routes, useNavigate } from 'react-router-dom';
import Adminproduct from './Adminproduct';
import User from './User';
import Adminhome from './Adminhome';
import Adminorder from './adminOrder';

function Admin() {
    let navigate=useNavigate()
  return (
   <Stack direction={{base:"column",md:"row"}}> 
      <VStack minH="570px"  top="0px" gap="20px" p="20px" bgColor={"rgb(4,15,57)"} justifyContent={"left"} textAlign="left">
        <Heading  color="white">Dashboard</Heading>
        <Button textAlign={"left"} minW="220px" maxW="220px"onClick={()=>{navigate("/admin")}} justifyContent={"left"} leftIcon={<BiHomeHeart/>}>Home</Button>
        <Button textAlign={"left"} minW="220px" onClick={()=>{navigate("/admin/user")}}  justifyContent={"left"} maxW="220px" leftIcon={<FaUserAlt/>}>Users</Button>
        <Button minW="220px" maxW="220px" onClick={()=>{navigate("/admin/product")}} justifyContent={"left"} leftIcon={<BsFillCartFill/>}>Products</Button>
        <Button minW="220px" maxW="220px" justifyContent={"left"} onClick={()=>{navigate("/admin/cart")}}  leftIcon={<BsFillBasket3Fill/>}>Cart Item</Button>
        <Button minW="220px" maxW="220px"  justifyContent={"left"} leftIcon={<MdAddCircle/>}>Add Products</Button>
      </VStack>
      <VStack>
    
            <Routes>
                <Route path="/" element={<Adminhome/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/product" element={<Adminproduct/>}/>
                <Route path="/cart" element={<Adminorder/>}/>
            </Routes>
        
      </VStack>
      
   </Stack>
  );
}

export default Admin;
