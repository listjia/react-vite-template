import React, { useState } from 'react';
import { NavLink } from '@mantine/core';
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

const icons = {
  ChartNoAxesCombined: <ChartNoAxesCombined size={20} />, // 首页
  Layers: <Layers size={20} />, // 基础管理
  Pill: <Pill size={16} />, // 检品管理
  Microscope: <Microscope size={16} />, // 检验管理
  Database: <Database size={16} />, // 数据管理

  ChartSpline: <ChartSpline size={20} />, // 图表管理
  ChartCandlestick: <ChartCandlestick size={16} />, // 图表模板
  Combine: <Combine size={16} />, // 模板绑定
  ChartScatter: <ChartScatter size={16} />, // 图表生成

  FileBox: <FileBox size={20} />, // 报告管理
  FileText: <FileText size={16} />, // 报告信息
  LayoutDashboard: <LayoutDashboard size={16} />, // 类型管理

  LaptopMinimalCheck: <LaptopMinimalCheck size={20} />, // 系统管理
  LandPlot: <LandPlot size={16} />, // 位置管理
  UserRoundSearch: <UserRoundSearch size={16} />, // 人员管理
  UserCog: <UserCog size={16} />, // 角色管理
  Variable: <Variable size={16} />, // 参数管理
  ShieldCheck: <ShieldCheck size={16} />, // 审计追踪
  Component: <Component size={16} />, // 变量管理
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
        icon: 'LandPlot',
        label: '位置管理',
        description: 'Item with description',
        path: '/system/position',
      },
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
  const [active, setActive] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const items = data.map((item, index) => (
    <NavLink
      // href={item.path}
      key={item.label}
      active={pathname === item.path}
      label={item.label}
      rightSection={item.rightSection}
      leftSection={icons[item.icon]}
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
            style={{ paddingLeft: '30px' }}
            rightSection={child.rightSection}
            leftSection={icons[child.icon]}
            onClick={() => router.push(child.path)}
            variant="filled"
          />
        ))}
    </NavLink>
  ));

  return <div className="h-[calc(100vh-60px)] overflow-y-auto  shadow min-w-56  ">{items}</div>;
};

export default Sider;
