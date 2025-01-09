import { useState } from 'react';
import { ActionIcon, Button, Flex, Stack, Text, Title, Tooltip, Badge } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import { IconEdit, IconTrash, IconPlus } from '@tabler/icons-react';
import {
  MantineReactTable,
  useMantineReactTable,
  MRT_EditActionButtons,
} from 'mantine-react-table';

const DataContent = () => {
  const [data, setData] = useState([
    {
      name: '集团公司',
      type: '部门',
      status: '启用',
      create_time: '2025-01-09 11:13',
      create_by: 'system',
      subRows: [
        {
          name: '制造工厂',
          type: '部门',
          status: '启用',
          create_time: '2025-01-09 11:13',
          create_by: 'system',
          subRows: [
            {
              name: '固体车间',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '注射液车间',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '大容量注射剂一号车间',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '大容量注射剂四号车间',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '冻干粉针剂二号车间',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
          ],
        },
        {
          name: '质量管理部',
          type: '部门',
          status: '启用',
          create_time: '2025-01-09 11:13',
          create_by: 'system',
          subRows: [
            {
              name: '质量管理一部',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '质量管理二部',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
            {
              name: '质量管理三部',
              type: '车间',
              status: '启用',
              create_time: '2025-01-09 11:13',
              create_by: 'system',
            },
          ],
        },
      ],
    },
  ]);
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: '部门名称',
        enableColumnActions: false,
        enableSorting: false,
        maxSize: 220,
      },
      {
        accessorKey: 'type',
        header: '类型',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'status',
        header: '部门状态',
        enableColumnActions: false,
        enableSorting: false,
        Cell: ({ renderedCellValue, row }) =>
          renderedCellValue === '启用' ? (
            <Badge size="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 135 }}>
              {renderedCellValue}
            </Badge>
          ) : (
            <Badge size="md" variant="gradient" gradient={{ from: 'red', to: 'orange', deg: 234 }}>
              {renderedCellValue}
            </Badge>
          ),
      },
      {
        accessorKey: 'create_time',
        header: '创建时间',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'create_by',
        header: '创建人',
        enableColumnActions: false,
        enableSorting: false,
      },
    ],
    []
  );
  const handlePaginationChange = (updater) => {
    console.log(updater);
  };
  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // showToolbarDropZone: false,
    debugTable: true,
    // enableRowSelection: true, //enable some features
    // enableColumnOrdering: true, //enable a feature for all columns
    enableExpanding: true,
    initialState: { expanded: true, density: 'xs', getRowId: (originalRow) => row.name },
    onPaginationChange: handlePaginationChange,
    enableEditing: true,
    // enableTopToolbar: false,
    positionActionsColumn: 'last',
    mantineTableHeadRowProps: {
      bg: 'red.5',
    },
    mantinePaginationProps: { height: 10 },
    filterFromLeafRows: true,
    localization: {
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
    },
    // enableColumnResizing: true,
    // enableRowOrdering: true, //enable
    // mantineRowDragHandleProps: ({ table }) => ({
    //   onDragEnd: () => {
    //     const { draggingRow, hoveredRow } = table.getState();
    //     if (hoveredRow && draggingRow) {
    //       data.splice(hoveredRow.index, 0, data.splice(draggingRow.index, 1)[0]);
    //       setData([...data]);
    //     }
    //   },
    // }),
    renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>在最上层新增位置</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => {
      console.log(row);
      console.log(internalEditComponents);

      return (
        <Stack>
          <Title order={3}>在{row.getValue()}下新增</Title>
          {internalEditComponents}
          <Flex justify="flex-end" mt="xl">
            <MRT_EditActionButtons variant="text" table={table} row={row} />
          </Flex>
        </Stack>
      );
    },

    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)} variant="subtle">
            <IconPlus size={18} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)} variant="subtle">
            <IconEdit size={18} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)} variant="subtle">
            <IconTrash size={18} />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        radius={3}
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        新增位置
      </Button>
    ),
  });

  return (
    <MantineReactTable
      state={{ isLoading: true }}
      table={table}
      enableStickyHeader
      enableStickyFooter
      mantineTableContainerProps={{ sx: { maxHeight: '300px' } }}
    />
  );
};

export default DataContent;
