import { useState, useMemo, useRef } from 'react';
import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ACTION_TYPES } from 'src/constants';
import CustomTable from 'src/components/custom-table';
import CustomModal from 'src/components/custom-modal';

import { useGetPlaceTree } from './useLoadPlaceTree';
import AddAndEditContent from './AddAndEditContent';

const DataContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const rowDataRef = useRef();
  const editTypeRef = useRef();
  // const { treeList } = useGetPlaceTree();
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
  const onClick = (item = {}, type) => {
    console.log(item, type);
    rowDataRef.current = item;
    editTypeRef.current = type;
    open();
  };
  const handleSubmit = () => {};
  return (
    <>
      <CustomTable
        columns={columns}
        data={data}
        onEdit={onClick}
        actions={['add', 'row_add', 'row_edit', 'row_delete']}
      />
      <CustomModal
        opened={opened}
        onClose={close}
        onSubmit={handleSubmit}
        title={ACTION_TYPES[editTypeRef.current] || ''}
      >
        <AddAndEditContent />
      </CustomModal>
    </>
  );
};

export default DataContent;
