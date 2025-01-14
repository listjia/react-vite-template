import React from 'react';
import { Modal, Button, Group, Box } from '@mantine/core';

const CustomModal = ({ opened, onClose, onSubmit, title, children }) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Box>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
