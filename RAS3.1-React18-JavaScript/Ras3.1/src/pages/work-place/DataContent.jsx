import { useMemo, useRef } from 'react';
import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ACTION_TYPES } from 'src/constants';
import CustomTable from 'src/components/custom-table';
import CustomModal from 'src/components/custom-modal';

import { useGetPlaceTree } from './useLoadPlaceTree';
import AddAndEditContent from './AddAndEditContent';
import { useDeletePosition } from './usePositionAction';
import { toast } from 'sonner';

const DataContent = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { treeList, refresh } = useGetPlaceTree();
  const { runAsync: deleteRow } = useDeletePosition();
  const rowDataRef = useRef();
  const editTypeRef = useRef();

  //should be memoized or stable
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
  const onClick = async (item = {}, type) => {
    console.log(item, type);
    rowDataRef.current = item;
    editTypeRef.current = type;
    if (type === 'row_delete') {
      const res = await deleteRow({ id: item.original.id });
      if (res && res.resCode === '1') {
        refresh();
        toast.success(res.resTipCN);
      } else {
        toast.error(res.resTipCN);
      }
      return;
    }
    open();
  };
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
