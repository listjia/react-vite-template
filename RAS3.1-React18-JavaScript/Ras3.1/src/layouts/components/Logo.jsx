import React from 'react';
import { Box, Image, Center } from '@mantine/core';
import url from '/header-logo.png';

const Logo = () => {
  return <Image src={url} className=" h-[45px]" />;
};

export default Logo;
