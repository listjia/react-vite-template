import React from 'react';
import { Box, Image, Center } from '@mantine/core';
import url from '/header-logo.png';

const Logo = () => {
  return (
    <Box className=" py-1 px-8">
      <Image src={url} className=" h-[45px]" />
    </Box>
  );
};

export default Logo;
