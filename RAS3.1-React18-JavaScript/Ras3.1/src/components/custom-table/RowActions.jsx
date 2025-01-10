import React from 'react';
import { ActionIcon, Button, Flex, Stack, Text, Title, Tooltip, Badge } from '@mantine/core';
import { IconEdit, IconTrash, IconPlus } from '@tabler/icons-react';

const RowActions = ({ actions, row, onEdit }) => {
  return (
    <Flex gap="md">
      {actions.includes('row_add') && (
        <Tooltip label="新增">
          <ActionIcon onClick={() => onEdit(row, 'edit')} variant="subtle">
            <IconPlus size={18} />
          </ActionIcon>
        </Tooltip>
      )}
      {actions.includes('row_edit') && (
        <Tooltip label="编辑">
          <ActionIcon onClick={() => onEdit(row, 'edit')} variant="subtle">
            <IconEdit size={18} />
          </ActionIcon>
        </Tooltip>
      )}
      {actions.includes('row_delete') && (
        <Tooltip label="删除">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)} variant="subtle">
            <IconTrash size={18} />
          </ActionIcon>
        </Tooltip>
      )}
    </Flex>
  );
};

export default RowActions;
