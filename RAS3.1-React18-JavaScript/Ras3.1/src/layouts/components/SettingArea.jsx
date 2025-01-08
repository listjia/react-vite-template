import React from 'react';
import { ActionIcon, Button, Box } from '@mantine/core';
import { BellDot, Bolt, CircleUserRound } from 'lucide-react';
const SettingArea = () => {
  return (
    <Box className="  flex-1 flex justify-end px-5 items-center space-x-5">
      <ActionIcon size={32} variant="default">
        <BellDot size={20} color="#e41111" />
      </ActionIcon>
      <ActionIcon size={32} variant="default">
        <Bolt size={20} />
      </ActionIcon>
    </Box>
  );
};

export default SettingArea;
