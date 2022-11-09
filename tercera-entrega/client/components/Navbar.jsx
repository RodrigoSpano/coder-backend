import React from "react";
import {Stack, Link} from '@chakra-ui/react'
// import Link from 'next'

const Navbar = () => {
  return <Stack w='100vw' bg='cadetblue' h='100px' flexDirection={'row'} gap={5} alignItems='center' justifyContent={'center'} fontSize='large' fontWeight={'bold'} >
    <Link href='/'>Home</Link>
    <Link href='/account' >account</Link>
    <Link href='/cart' >cart</Link>
    <Link href='/auth/logout' >logout</Link>
  </Stack>
};

export default Navbar;
