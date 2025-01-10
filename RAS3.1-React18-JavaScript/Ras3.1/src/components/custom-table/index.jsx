import { Button } from '@mantine/core';

import {
  MantineReactTable,
  useMantineReactTable,
  MRT_EditActionButtons,
} from 'mantine-react-table';

import RowActions from './RowActions';
import { initConfig } from './config';

const CustomTable = ({ columns, data, onEdit, actions = [] }) => {
  console.log(actions);
  const handlePaginationChange = (updater) => {
    console.log(updater);
  };
  const table = useMantineReactTable({
    columns,
    data,
    // showToolbarDropZone: false,
    ...initConfig,
    initialState: {
      expanded: true,
      density: 'xs',
      getRowId: (originalRow) => originalRow.name,
    },
    onPaginationChange: handlePaginationChange,

    // mantineRowDragHandleProps: ({ table }) => ({
    //   onDragEnd: () => {
    //     const { draggingRow, hoveredRow } = table.getState();
    //     if (hoveredRow && draggingRow) {
    //       data.splice(hoveredRow.index, 0, data.splice(draggingRow.index, 1)[0]);
    //       setData([...data]);
    //     }
    //   },
    // }),
    // renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
    //   <Stack>
    //     <Title order={3}>在最上层新增位置</Title>
    //     {internalEditComponents}
    //     <Flex justify="flex-end" mt="xl">
    //       <MRT_EditActionButtons variant="text" table={table} row={row} />
    //     </Flex>
    //   </Stack>
    // ),
    // renderEditRowModalContent: ({ table, row, internalEditComponents }) => {
    //   return (
    //     <Stack>
    //       <Title order={3}>在{row.getValue()}下新增</Title>
    //       {internalEditComponents}
    //       <Flex justify="flex-end" mt="xl">
    //         <MRT_EditActionButtons variant="text" table={table} row={row} />
    //       </Flex>
    //     </Stack>
    //   );
    // },

    renderRowActions: ({ row, table }) => (
      <RowActions actions={actions} row={row} onEdit={onEdit} />
    ),
    renderTopToolbarCustomActions: ({ table }) =>
      actions.includes('add') && (
        <Button radius={3} onClick={() => onEdit(null, 'new')}>
          新增位置
        </Button>
      ),
  });
  return <MantineReactTable table={table} />;
};

export default CustomTable;
