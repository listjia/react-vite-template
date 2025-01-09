import React from 'react';
import { Flex } from '@mantine/core';
import Logo from './Logo';
import SettingArea from './SettingArea';
import AccountButton from './AccountButton';

const Header = () => {
  return (
    <div className=" flex h-[60px] shadow-zinc-400 bg-white/90  shadow z-50 fixed top-0 left-0 w-screen ">
      <Logo />

      <SettingArea />

      <AccountButton />
    </div>
  );
};

export default Header;
