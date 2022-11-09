import { Stack } from '@chakra-ui/react';
import React from "react";
import Navbar from './Navbar';

const Layout = ({children}) => {
  return <Stack minH='100vh' w='100vw'>
    <Navbar/>
    {children}
  </Stack>
};

export default Layout;
