import React, { useRef } from 'react';
import { Button, ActionIcon, Menu, Text, Box, Popover } from '@mantine/core';
import {
  FileSearch,
  SquareArrowOutUpLeft,
  LockKeyhole,
  CircleUserRound,
  ChevronDown,
} from 'lucide-react';

const AccountButton = () => {
  return (
    <Box className=" min-w-24 flex items-center ">
      <Menu
        shadow="md"
        width={200}
        position="bottom-end"
        trigger="click"
        transitionProps={{ transition: 'rotate-right', duration: 150 }}
      >
        <Menu.Target>
          <Button size="xs">
            <CircleUserRound size={20} />
            <ChevronDown size={20} />
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>个人</Menu.Label>
          <Menu.Item leftSection={<LockKeyhole size={20} />}>修改密码</Menu.Item>

          <Menu.Item
            leftSection={<FileSearch size={20} />}
            rightSection={
              <Text size="xs" c="dimmed">
                ⌘K
              </Text>
            }
          >
            搜索
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>操作</Menu.Label>
          <Menu.Item leftSection={<SquareArrowOutUpLeft size={20} />}>退出登录</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default AccountButton;
