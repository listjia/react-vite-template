import React from 'react';
import {
  ActionIcon,
  Button,
  Flex,
  Stack,
  Title,
  Box,
  Group,
  Text,
  Tooltip,
  Popover,
} from '@mantine/core';
import { IconEdit, IconTrash, IconPlus } from '@tabler/icons-react';

const RowActions = ({ actions, row, onEdit }) => {
  return (
    <Flex gap="md">
      {actions.includes('row_add') && (
        <Tooltip label="新增">
          <ActionIcon onClick={() => onEdit(row, 'row_add')} variant="subtle">
            <IconPlus size={18} />
          </ActionIcon>
        </Tooltip>
      )}
      {actions.includes('row_edit') && (
        <Tooltip label="编辑">
          <ActionIcon onClick={() => onEdit(row, 'row_edit')} variant="subtle">
            <IconEdit size={18} />
          </ActionIcon>
        </Tooltip>
      )}
      {actions.includes('row_delete') && (
        <Popover shadow="md" position="bottom-end" width={220}>
          <Popover.Target>
            <ActionIcon color="red" variant="subtle">
              <IconTrash size={18} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Stack gap={10}>
              <Title size="sm">删除确认</Title>
              <Text size="sm">请确认是否要删除这行数据？</Text>
              <Stack flex="start">
                <Button variant="ghost" size="sm" onClick={() => onEdit(row, 'row_delete')}>
                  删除
                </Button>
              </Stack>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      )}
    </Flex>
  );
};

export default RowActions;
