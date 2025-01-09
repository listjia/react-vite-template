import React from 'react';
import { Box, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const Header = () => {
  const icon = <IconSearch style={{ width: 14, height: 14 }} />;
  return (
    <Box className=" rounded-sm  mb-5 flex justify-end space-x-5">
      <TextInput placeholder="请输入车间名称" rightSection={icon} />
    </Box>
  );
};

export default Header;
