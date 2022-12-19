import { Heading, HStack, Stack, VStack,Text,Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button, } from "@chakra-ui/react";
import React from "react";
import { useEffect,useState } from "react";

import {BsBasket3,BsFillCartCheckFill} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
const Adminhome=()=>{
    const[details,setdetails]=useState({ productcount:0,   usercount:0, ordercount:0 ,cartcount:0})
    const[users,setusers]=useState([])
    const getCountofproduct=async()=>{
        const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/product/count",{
            headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
          
        });
        const data=await resp.json()
        if(resp.status==200){
            setdetails((s)=>{return {...s,productcount:data.count}})
            
        }
    }
    const getCountofuser=async()=>{
        const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/user/count",{
            headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
          
        });
        const data=await resp.json()
        if(resp.status==200){
            setdetails((s)=>{return {...s,usercount:data.count}})
        }
    }
    const getCountofcart=async()=>{
        const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/cart/count",{
            headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
          
        });
        const data=await resp.json()
        if(resp.status==200){
            setdetails((s)=>{return {...s,cartcount:data.count}})
        }
    }

    const getAllusers=async()=>{
        const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/user/limit",{
            headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
          
        });
        const data=await resp.json()
        if(resp.status==200){
            setusers(data)
        }
    }
useEffect(()=>{
getCountofproduct()
  getCountofuser()
  getCountofcart()
  getAllusers()
},[])



    return(
        <Stack p="40px">
            <HStack gap="40px">
                    <HStack boxShadow={"md"} gap="20px" p="10px" pl="20px" pr="20px" justifyContent={"space-between"} minW="240px" maxW={"240PX"} borderRadius={"10px"}  color="white" bgColor={"rgb(4,15,57)"}>
                        <VStack >
                            <Heading  minW="full"  justifyContent={"left"}  fontSize={"19px"}>{details.productcount}</Heading>
                            <Text justifyContent={"left"} fontSize={"19px"}>Total Products</Text>
                        </VStack>
                        <BsBasket3 size={"29px"}/>
                    </HStack>

                 

                    <HStack boxShadow={"md"} gap="20px"  p="10px" pl="20px" pr="20px" justifyContent={"space-between"} borderRadius={"10px"} minW="240px" maxW={"240PX"} color="white" bgColor={"rgb(4,15,57)"}>
                        <VStack>
                            <Heading   minW="full"  justifyContent={"left"}  fontSize={"19px"}>{details.usercount}</Heading>
                            <Text justifyContent={"left"} fontSize={"19px"}>Total Users</Text>
                        </VStack>
                        <FaUserCircle size={"29px"}/>
                    </HStack>

                    <HStack boxShadow={"md"} gap="20px"  pl="20px" pr="20px" justifyContent={"space-between"} borderRadius={"10px"} p="10px" minW="240px" maxW={"240PX"} color="white" bgColor={"rgb(4,15,57)"}>
                        <VStack>
                            <Heading minW="full" textAlign={"left"} justifyContent={"left"}  fontSize={"19px"}>{details.cartcount}</Heading>
                            <Text justifyContent={"left"} fontSize={"19px"}>Cart Items</Text>
                        </VStack>
                        <BsFillCartCheckFill size={"29px"}/>
                    </HStack>
            </HStack>
<HStack pt="20px" alignItems={"center"} alignContent={"center"} justifyContent={"space-between"}>
<Heading fontSize={"24px"}>
    New Customers
</Heading>
<Button>View All</Button>
</HStack>
            <TableContainer>
  <Table variant='striped' colorScheme='blue'>
   
    <Thead bgColor={"rgb(4,15,57)"} color="white">
      <Tr>
        <Th color="white">Name of Customer</Th>
        <Th color="white">Email Id</Th>
        <Th color="white" >Unique Id</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
        users.map(e=>{
            return <Tr>
                <Td>{e.name}</Td>
                <Td>{e.email}</Td>
                <Td>{e._id}</Td>
            </Tr>
        })
     }
    </Tbody>

  </Table>
</TableContainer>
        </Stack>
    )
}

export default Adminhome