import React from 'react';
import { Modal, Button, Group, Box } from '@mantine/core';

const CustomModal = ({ opened, onClose, onSubmit, title, children }) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Box component="form" onSubmit={onSubmit}>
        {children}
        <Group position="right" mt="md">
          <Button variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button type="submit">确定</Button>
        </Group>
      </Box>
    </Modal>
  );
};

export default CustomModal;
