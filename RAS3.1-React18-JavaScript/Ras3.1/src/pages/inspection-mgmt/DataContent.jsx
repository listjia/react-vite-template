import { useMemo, useRef } from 'react';
import { Box, TextInput, Button, Tabs } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { ACTION_TYPES } from 'src/constants';
import CustomTable from 'src/components/custom-table';
import CustomModal from 'src/components/custom-modal';

import { useGetPlaceTree } from './useLoadPlaceTree';

const DataContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { treeList, refresh } = useGetPlaceTree();

  const rowDataRef = useRef();
  const editTypeRef = useRef();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'text', //access nested data with dot notation
        header: '部门名称',
        enableColumnActions: false,
        enableSorting: false,
        maxSize: 220,
      },
      {
        accessorKey: 'code',
        header: '代码',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'type',
        header: '类型',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'isEnable',
        header: '部门状态',
        enableColumnActions: false,
        enableSorting: false,
        Cell: ({ renderedCellValue, row }) =>
          renderedCellValue === '1' ? (
            <Badge size="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 135 }}>
              启用
            </Badge>
          ) : (
            <Badge size="md" variant="gradient" gradient={{ from: 'red', to: 'orange', deg: 234 }}>
              禁用
            </Badge>
          ),
      },
      {
        accessorKey: 'createTime',
        header: '创建时间',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'createBy',
        header: '创建人',
        enableColumnActions: false,
        enableSorting: false,
      },
    ],
    []
  );
  const onClick = () => {};
  return (
    <>
      <CustomTable
        columns={columns}
        data={treeList}
        onEdit={onClick}
        getSubRows={(row) => row.children}
        actions={['add', 'row_add', 'row_edit', 'row_delete']}
      />
      <CustomModal opened={opened} onClose={close} title={ACTION_TYPES[editTypeRef.current] || ''}>
        123
      </CustomModal>
    </>
  );
};

export default DataContent;
