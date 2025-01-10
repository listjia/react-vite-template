import React from 'react';
import { Box, Burger } from '@mantine/core';
import Logo from './Logo';

import SettingArea from './SettingArea';
import CustomBurger from './CustomBurger';

const Header = () => {
  return (
    <div className=" flex h-[60px] shadow-zinc-400 bg-white/90  shadow z-50 fixed items-center  justify-between top-0 left-0 w-screen ">
      <Box className=" py-1 px-8" visibleFrom="sm">
        <Logo />
      </Box>
      <Box hiddenFrom="sm" className=" px-1">
        <CustomBurger />
      </Box>

      <Box>
        <SettingArea />
      </Box>
    </div>
  );
};

export default Header;
