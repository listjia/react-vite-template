import React from 'react';
import { Box, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const CustomBurger = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const toggle = () => {
    open();
  };
  return (
    <>
      <Burger onClick={toggle} size="md" />
      <Drawer opened={opened} onClose={close} position="bottom">
        {/* Drawer content */}
      </Drawer>
    </>
  );
};

export default CustomBurger;
