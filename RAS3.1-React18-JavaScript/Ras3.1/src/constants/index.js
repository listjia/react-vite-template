// ----------------------------------------------------------------------

export const TOKEN_STORAGE_KEY = 'jwt_access_token';

export const ACTION_TYPES = {
  add: '新增',
  row_add: '行新增',
  row_edit: '行编辑',
  row_delete: '删除',
};

// CJ:车间 FJ:房间 HC：环测点位 SH：水数据点位 BM：部门 GC：公司/工厂
export const POSITION_TYPES = [
  { label: '车间', value: 'CJ' },
  { label: '房间', value: 'FJ' },
  { label: '环测点位', value: 'HC' },
  { label: '水数据点位', value: 'SH' },
  { label: '部门', value: 'BM' },
  { label: '公司/工厂', value: 'GC' },
];

export const CLEANLEVEL_LEVELS = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

// PZ:品种 PG：品规 BZ：包装规格 YL:原料  FY：浮游菌 XF:悬浮粒子
//  DXF:动态悬浮粒子 CJ:沉降菌  DCJ：动态沉降菌；表面微生物：BM：厂房设备外表面
//   NBM：设备内表面 墙面微生物：QM 地面微生物：DM YY：饮用水
//   CH：纯化水、ZSS：注射用水、RO：RO水 CL：预处理水 ZQ:纯蒸汽 LL:冷凝水
export const INSPECTION_TYPES = [
  { label: '品种', value: 'PZ' },
  { label: '品规', value: 'PG' },
  { label: '包装规格', value: 'BZ' },
  { label: '原料', value: 'YL' },
  { label: '浮游菌', value: 'FY' },
  { label: '悬浮粒子', value: 'XF' },
  { label: '动态悬浮粒子', value: 'DXF' },
  { label: '沉降菌', value: 'CJ' },
  { label: '动态沉降菌', value: 'DCJ' },
  { label: '表面微生物', value: 'BM' },
  { label: '厂房设备外表面', value: 'PZ' },
  { label: '设备内表面', value: 'NBM' },
  { label: '墙面微生物', value: 'QM' },
  { label: '地面微生物', value: 'DM' },
  { label: '饮用水', value: 'YY' },
  { label: '纯化水', value: 'CH' },
  { label: '注射用水', value: 'ZSS' },
  { label: 'RO水', value: 'RO' },
  { label: '预处理水', value: 'CL' },
  { label: '纯蒸汽', value: 'ZQ' },
  { label: '冷凝水', value: 'LL' },
];
