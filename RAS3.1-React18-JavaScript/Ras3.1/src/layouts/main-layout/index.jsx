import React from 'react';
import { Container, Stack, Group, Box } from '@mantine/core';

import MainLayoutContent from './content';
import Header from '../components/Header';
import Sider from '../components/Sider';

const MainLayout = ({ children }) => {
  return (
    <Box className=" size-full  overflow-hidden ">
      <Header />
      <Box className=" flex relative h-screen pt-[60px] overflow-hidden">
        <Sider />
        <MainLayoutContent>{children}</MainLayoutContent>
      </Box>
    </Box>
  );
};

export default MainLayout;
