import React from 'react';
import { Button, Select, Group, TextInput, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

import { POSITION_TYPES, CLEANLEVEL_LEVELS } from 'src/constants';
import { useAddPosition, useEditPosition } from './usePositionAction';

const AddAndEditContent = ({ rowData, onClose, refresh, type }) => {
  console.log(type);
  const { runAsync: addPosition } = useAddPosition();
  const { runAsync: editPosition } = useEditPosition();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues:
      type === 'add' || type === 'row_add'
        ? {
            text: '',
            type: '',
            cleanlinessLevel: '',
            code: '',
          }
        : {
            text: rowData?.original.text || '',
            type: rowData?.original.type || '',
            cleanlinessLevel: rowData?.original.cleanlinessLevel || '',
            code: rowData?.original.code || '',
          },

    validate: {
      text: (value) => (value.trim() ? null : '位置名称不能为空'),
      type: (value) => (value ? null : '位置类型不能为空'),
    },
  });

  const handleSubmit = async (values) => {
    if (type === 'add') {
      const res = await addPosition(values);
      if (res && res.resCode === '1') {
        onClose();
        refresh();
      }
    } else if (type === 'row_add') {
      const res = await addPosition({ ...values, pid: rowData.original.id });
      if (res && res.resCode === '1') {
        onClose();
        refresh();
      }
    } else if (type === 'row_edit') {
      const res = await editPosition({ ...values, id: rowData.original.id });
      if (res && res.resCode === '1') {
        onClose();
        refresh();
      }
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xs">
        <TextInput
          withAsterisk
          label="位置名称"
          placeholder="请输入位置名称"
          key={form.key('text')}
          {...form.getInputProps('text')}
        />
        <Select
          withAsterisk
          label="位置类型"
          key={form.key('type')}
          placeholder="请选择位置类型"
          data={POSITION_TYPES}
          {...form.getInputProps('type')}
        />
        <Select
          label="洁净等级"
          key={form.key('cleanlinessLevel')}
          placeholder="请选择洁净等级"
          data={CLEANLEVEL_LEVELS}
          {...form.getInputProps('cleanlinessLevel')}
        />
        <TextInput
          label="标准代码"
          placeholder="请输入标准代码（如有）"
          key={form.key('code')}
          {...form.getInputProps('code')}
        />
      </Stack>

      <Group justify="flex-end" mt="md">
        <Button variant="outline" onClick={onClose}>
          取消
        </Button>
        <Button type="submit">确定</Button>
      </Group>
    </form>
  );
};
export default AddAndEditContent;
