import React from 'react';
import { Box, Code, Title, MantineProvider, createTheme } from '@mantine/core';
import { getIcon } from 'src/layouts/components/Sider.jsx';

const ContentHeader = ({ title, icon, customStyle = {} }) => {
  const {
    size = 16,
    strokeWidth = 2,
    color = '#000000',
    fontColor = 'text-blue-500',
  } = customStyle;
  return (
    <Box className=" py-5  flex space-x-2 text-blue-500">
      {getIcon(icon, size, strokeWidth, color)}
      <Title order={3} className={fontColor}>
        {title}
      </Title>
    </Box>
  );
};

export default ContentHeader;
