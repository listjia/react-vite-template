import React, { useState } from 'react';
import { NavLink, Box } from '@mantine/core';
import {
  Pill,
  Layers,
  UserCog,
  FileBox,
  Combine,
  FileText,
  Variable,
  Database,
  LandPlot,
  Component,
  Microscope,
  ShieldCheck,
  ChartSpline,
  ChartScatter,
  LayoutDashboard,
  UserRoundSearch,
  ChartCandlestick,
  LaptopMinimalCheck,
  ChartNoAxesCombined,
} from 'lucide-react';

import { usePathname, useRouter } from '../../routes/hooks';

export const getIcon = (iconName, size = 16, strokeWidth = 2, color = '#78716c') => {
  const iconMap = {
    ChartNoAxesCombined: (
      <ChartNoAxesCombined size={size} strokeWidth={strokeWidth} color={color} />
    ),
    Layers: <Layers size={size} strokeWidth={strokeWidth} color={color} />,
    Pill: <Pill size={size} strokeWidth={strokeWidth} color={color} />,
    Microscope: <Microscope size={size} strokeWidth={strokeWidth} color={color} />,
    Database: <Database size={size} strokeWidth={strokeWidth} color={color} />,
    ChartSpline: <ChartSpline size={size} strokeWidth={strokeWidth} color={color} />,
    ChartCandlestick: <ChartCandlestick size={size} strokeWidth={strokeWidth} color={color} />,
    Combine: <Combine size={size} strokeWidth={strokeWidth} color={color} />,
    ChartScatter: <ChartScatter size={size} strokeWidth={strokeWidth} color={color} />,
    FileBox: <FileBox size={size} strokeWidth={strokeWidth} color={color} />,
    FileText: <FileText size={size} strokeWidth={strokeWidth} color={color} />,
    LayoutDashboard: <LayoutDashboard size={size} strokeWidth={strokeWidth} color={color} />,
    LaptopMinimalCheck: <LaptopMinimalCheck size={size} strokeWidth={strokeWidth} color={color} />,
    LandPlot: <LandPlot size={size} strokeWidth={strokeWidth} color={color} />,
    UserRoundSearch: <UserRoundSearch size={size} strokeWidth={strokeWidth} color={color} />,
    UserCog: <UserCog size={size} strokeWidth={strokeWidth} color={color} />,
    Variable: <Variable size={size} strokeWidth={strokeWidth} color={color} />,
    ShieldCheck: <ShieldCheck size={size} strokeWidth={strokeWidth} color={color} />,
    Component: <Component size={size} strokeWidth={strokeWidth} color={color} />,
  };

  return iconMap[iconName] || null;
};

const data = [
  {
    icon: 'ChartNoAxesCombined',
    label: '首页',
    description: 'Item with description',
    path: '/home',
  },
  {
    icon: 'Layers',
    label: '基础管理',
    description: 'Item with description',
    path: '/data',
    children: [
      {
        icon: 'LandPlot',
        label: '位置管理',
        description: 'Item with description',
        path: '/data/position',
      },
      {
        icon: 'Pill',
        label: '检品管理',
        description: 'Item with description',
        path: '/data/inspection',
      },
      {
        icon: 'Microscope',
        label: '检验管理',
        description: 'Item with description',
        path: '/data/test',
      },
      {
        icon: 'Database',
        label: '数据管理',
        description: 'Item with description',
        path: '/data/source',
      },
    ],
  },
  {
    icon: 'ChartSpline',
    label: '图表管理',
    // rightSection: <ChevronDown size={18} />,
    path: '/chart',
    children: [
      {
        icon: 'ChartCandlestick',
        label: '图表模板',
        description: 'Item with description',
        path: '/chart/template',
      },
      {
        icon: 'Combine',
        label: '模板绑定',
        description: 'Item with description',
        path: '/chart/related',
      },
      {
        icon: 'ChartScatter',
        label: '图表生成',
        description: 'Item with description',
        path: '/chart/generate',
      },
    ],
  },
  {
    icon: 'FileBox',
    label: '报告管理',
    path: '/report',
    children: [
      {
        icon: 'FileText',
        label: '报告信息',
        description: 'Item with description',
        path: '/report/info',
      },
      {
        icon: 'LayoutDashboard',
        label: '类型管理',
        description: 'Item with description',
        path: '/report/types',
      },
    ],
  },
  {
    icon: 'LaptopMinimalCheck',
    label: '系统管理',
    path: '/system',
    children: [
      {
        icon: 'UserRoundSearch',
        label: '人员管理',
        description: 'Item with description',
        path: '/system/users',
      },
      {
        icon: 'UserCog',
        label: '角色管理',
        description: 'Item with description',
        path: '/system/roles',
      },
      {
        icon: 'Variable',
        label: '参数管理',
        description: 'Item with description',
        path: '/system/parameters',
      },
      {
        icon: 'ShieldCheck',
        label: '审计追踪',
        description: 'Item with description',
        path: '/system/track',
      },
      {
        icon: 'Component',
        label: '变量管理',
        description: 'Item with description',
        path: '/system/variable',
      },
    ],
  },
];
const Sider = () => {
  const pathname = usePathname();
  const router = useRouter();
  const items = data.map((item, index) => (
    <NavLink
      // href={item.path}
      key={item.label}
      active={pathname === item.path}
      label={item.label}
      style={{
        paddingInline: '18px',
        paddingTop: '10px',
        color: pathname === item.path ? '#f3f4f6' : '#374151',
        fontFamily: 'Microsoft YaHei',
      }}
      rightSection={item.rightSection}
      leftSection={getIcon(item.icon)}
      onClick={() => !item.children && router.push(item.path)}
      childrenOffset={0}
      variant="filled"
    >
      {item.children &&
        item.children.map((child) => (
          <NavLink
            // href={item.path}
            key={child.label}
            active={pathname === child.path}
            label={child.label}
            style={{
              paddingLeft: '50px',
              paddingTop: '10px',
              color: pathname === child.path ? '#f3f4f6' : '#374151',
              fontFamily: 'Microsoft YaHei',
            }}
            rightSection={child.rightSection}
            leftSection={getIcon(child.icon)}
            onClick={() => router.push(child.path)}
            variant="filled"
          />
        ))}
    </NavLink>
  ));

  return (
    <Box
      className=" h-full overflow-y-auto  border-r-2 border-r-gray-200  shadow min-w-56   "
      visibleFrom="sm"
    >
      {items}
    </Box>
  );
};

export default Sider;
