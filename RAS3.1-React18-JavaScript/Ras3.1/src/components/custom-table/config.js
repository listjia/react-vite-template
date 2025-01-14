export const localization = {
  actions: '操作',
  and: 'e',
  cancel: '取消',
  save: '确定',
  edit: '编辑',
  changeFilterMode: '更改筛选模式',
  changeSearchMode: '更改搜索模式',
  clearFilter: '清除筛选',
  clearSearch: '清除搜索',
  clearSort: '清除排序',
  clickToCopy: 'Clique para copiar',
  sortByColumnAsc: '正向排序',
  sortByColumnDesc: '反向排序',
  sortedByColumnAsc: 'Sorted by {column} ascending',
  sortedByColumnDesc: 'Sorted by {column} descending',
  showAllColumns: '展示所有列',
  rowNumbers: '行数量',
  rowsPerPage: '每页行数',
};

export const initConfig = {
  debugTable: true,
  // enableRowSelection: true, //enable some features
  // enableColumnOrdering: true, //enable a feature for all columns
  enableExpanding: true,
  enableEditing: true,
  enableStickyHeader: true,
  mantineTableContainerProps: { style: { maxHeight: '600px' } },
  // enableTopToolbar: false,
  positionActionsColumn: 'last',
  filterFromLeafRows: true,
  localization: localization,
  enableColumnOrdering: false,
  // enableColumnResizing: true,
  // enableRowOrdering: true, //enable
};
