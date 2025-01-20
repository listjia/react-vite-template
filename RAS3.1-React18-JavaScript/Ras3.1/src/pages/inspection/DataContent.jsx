import React, { useMemo, useRef } from 'react';
import { Pagination, Stack, Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CustomTable from 'src/components/custom-table';
import CustomModal from 'src/components/custom-modal';
import { INSPECTION_TYPES } from 'src/constants';
import AddAndEditContent from './AddAndEditContent';
import { useGetInspectionList } from './useLoadInspectionData';

const DataContent = () => {
  const { list, refresh } = useGetInspectionList();
  const [opened, { open, close }] = useDisclosure(false);
  const rowDataRef = useRef();
  const editTypeRef = useRef();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'text',
        header: '检品名称',
        enableColumnActions: false,
        enableSorting: false,
        maxSize: 220,
      },
      {
        accessorKey: 'code',
        header: '检品代码',
        enableColumnActions: false,
        enableSorting: false,
      },
      {
        accessorKey: 'type',
        header: '类型',
        enableColumnActions: false,
        enableSorting: false,
        Cell: ({ renderedCellValue, row }) =>
          INSPECTION_TYPES.find((e) => e.value === renderedCellValue)?.label,
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
    ],
    []
  );
  const onClick = async (item = {}, type) => {
    rowDataRef.current = item;
    editTypeRef.current = type;
    open();
  };
  if (!list && list.length === 0) {
    return null;
  }
  return (
    <>
      <CustomTable
        columns={columns}
        data={list}
        onEdit={onClick}
        getSubRows={(row) => row.children}
        actions={['add', 'row_add', 'row_edit', 'row_delete']}
      />
      <CustomModal
        opened={opened}
        onClose={close}
        title={INSPECTION_TYPES[editTypeRef.current] || ''}
      >
        <AddAndEditContent
          rowData={rowDataRef.current}
          onClose={close}
          refresh={refresh}
          type={editTypeRef.current}
        />
      </CustomModal>
    </>
  );
};

export default DataContent;
