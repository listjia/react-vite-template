import React from 'react';
import { Box, TextInput, Center, SegmentedControl, Select, Group } from '@mantine/core';
import { IconSearch, IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';
import { useForm } from '@mantine/form';

import { POSITION_TYPES, CLEANLEVEL_LEVELS } from 'src/constants';

const data = ['React', 'Vue', 'Angular', 'Svelte'];
const Header = () => {
  const icon = <IconSearch style={{ width: 14, height: 14 }} />;
  const form = useForm({
    mode: 'uncontrolled',

    validate: {
      text: (value) => (value.trim() ? null : '位置名称不能为空'),
      type: (value) => (value ? null : '位置类型不能为空'),
    },
  });
  const handleSubmit = () => {};
  return (
    <Box className=" rounded-sm  mb-5 flex flex-wrap  md:justify-between ">
      <SegmentedControl
        data={[
          {
            value: 'preview',
            label: (
              <Center style={{ gap: 10 }}>
                <IconEye size={16} />
                <span>检项信息</span>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center style={{ gap: 10 }}>
                <IconCode size={16} />
                <span>检项群组</span>
              </Center>
            ),
          },
        ]}
      />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group>
          <Select
            key={form.key('cleanlinessLevel')}
            placeholder="请选择车间"
            variant="filled"
            data={CLEANLEVEL_LEVELS}
            {...form.getInputProps('cleanlinessLevel')}
          />
          <Select
            key={form.key('cleanlinessLevel')}
            placeholder="请选择产品"
            variant="filled"
            data={CLEANLEVEL_LEVELS}
            {...form.getInputProps('cleanlinessLevel')}
          />
          <Select
            key={form.key('cleanlinessLevel')}
            placeholder="请选择检项类型"
            variant="filled"
            data={CLEANLEVEL_LEVELS}
            {...form.getInputProps('cleanlinessLevel')}
          />
          <TextInput placeholder="请输入名称" rightSection={icon} />
        </Group>
      </form>
    </Box>
  );
};

export default Header;
