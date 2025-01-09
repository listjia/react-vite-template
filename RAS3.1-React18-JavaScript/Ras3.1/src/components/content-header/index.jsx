import React from 'react';
import { Box, Code, Title, MantineProvider, createTheme } from '@mantine/core';
import { icons } from 'src/layouts/components/Sider.jsx';
import { LandPlot } from 'lucide-react';

const ContentHeader = ({ title, icon }) => {
  return (
    <Box className=" py-8  flex space-x-2 text-blue-500">
      <LandPlot size={28} />
      <Title order={3}>{title}</Title>
    </Box>
  );
};

export default ContentHeader;
