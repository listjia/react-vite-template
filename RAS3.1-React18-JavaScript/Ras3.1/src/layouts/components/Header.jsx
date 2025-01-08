import React from 'react';
import { Flex } from '@mantine/core';
import Logo from './Logo';
import SettingArea from './SettingArea';
import AccountButton from './AccountButton';

const Header = () => {
  return (
    <div className=" flex min-h-[60px] bg-zinc-50 shadow-lg z-50 ">
      <Logo />

      <SettingArea />

      <AccountButton />
    </div>
  );
};

export default Header;
