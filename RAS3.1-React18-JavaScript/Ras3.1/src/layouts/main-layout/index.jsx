import React from 'react';
import { Container, Stack, Group, Box } from '@mantine/core';

import MainLayoutContent from './content';
import Header from '../components/Header';
import Sider from '../components/Sider';

const MainLayout = ({ children }) => {
  return (
    <Box className=" size-full ">
      <Header fixed />
      <Box className=" flex">
        <Sider />
        <MainLayoutContent>{children}</MainLayoutContent>
      </Box>
    </Box>
  );
};

export default MainLayout;
