import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,Heading, Button
  } from '@chakra-ui/react'
import { useState,useEffect } from "react";

const Adminproduct=()=>{
const[products,setproducts]=useState([])
const[reload,setreload]=useState(false)
const getAllproduct=async()=>{
    const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/product/all",{
        headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
      
    });
    if(resp.status==200){
        const data=await resp.json()
        setproducts(data)
    }
}

const deleteproduct=async(id)=>{
    const resp=await fetch(`https://hilarious-kerchief-crab.cyclic.app/admin/product/${id}`,{
        method:"DELETE",
        headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
      
    });
    if(resp.status==200){
        setreload(!reload)
    }
}


useEffect(()=>{
    getAllproduct()
},[reload])

    return(
        <Container minW="900px">
            <Heading pb="20px" pt="20px">
                Manage Products
            </Heading>
            <TableContainer>
    <Table minW={{md:"720px"}} variant='striped' colorScheme='blue'>
   
      <Thead bgColor={"rgb(4,15,57)"} color="white">
        <Tr>
          <Th color="white">Product</Th>
          <Th color="white">Brand</Th>
          <Th color="white">Cost</Th>
          <Th color="white">Remove</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            products.map((e)=>{
                return (<Tr>
                        <Td maxW="320px" overflow={"hidden"}>{e.title}</Td>
                        <Td>{e.brand}</Td>
                        <Td>{e.cost}</Td>
                        <Td><Button onClick={()=>{deleteproduct(e._id)}} minW="140px" maxW="140px">Remove</Button></Td>
                    </Tr>)
            })
        }
      </Tbody>
   
    </Table>
  </TableContainer>
        </Container>
    )
}

export default Adminproduct