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

const User=()=>{
const[users,setusers]=useState([])
const[reload,setreload]=useState(false)
const getAllusers=async()=>{
    const resp=await fetch("https://hilarious-kerchief-crab.cyclic.app/admin/user/all",{
        headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
      
    });
    if(resp.status==200){
        const data=await resp.json()
        setusers(data)
    }
}

const deleteuser=async(id)=>{
    const resp=await fetch(`https://hilarious-kerchief-crab.cyclic.app/admin/user/${id}`,{
        method:"DELETE",
        headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
      
    });
    if(resp.status==200){
        setreload(!reload)
    }
}

const roleswitch=async(id)=>{
    const resp=await fetch(`https://hilarious-kerchief-crab.cyclic.app/admin/user/${id}`,{
        method:"PATCH",
        headers:{"authorization":`bearer ${JSON.parse(localStorage.getItem("JWTTOKEN"))}`},
      
    });
    if(resp.status==200){
        setreload(!reload)
    }
}

useEffect(()=>{
    getAllusers()
},[reload])

    return(
        <Container minW="900px">
            <Heading pb="20px" pt="20px">
                Manage Users
            </Heading>
            <TableContainer>
    <Table minW="720px" variant='striped' colorScheme='blue'>
   
      <Thead bgColor={"rgb(4,15,57)"} color="white">
        <Tr>
          <Th color="white">Name</Th>
          <Th color="white">Email</Th>
          <Th color="white">Delete</Th>
          <Th color="white">Update Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            users.map((e)=>{
                return (<Tr>
                        <Td>{e.name}</Td>
                        <Td>{e.email}</Td>
                        <Td><Button onClick={()=>{deleteuser(e._id)}}>Delete</Button></Td>
                        <Td><Button onClick={()=>{roleswitch(e._id)}} minW="140px" maxW="140px">{e.role=="admin"?"Make User":"Make Admin"}</Button></Td>
                    </Tr>)
            })
        }
      </Tbody>
   
    </Table>
  </TableContainer>
        </Container>
    )
}

export default User