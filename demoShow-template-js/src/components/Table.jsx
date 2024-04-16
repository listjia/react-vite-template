
import { SheetComponent } from '@antv/s2-react';
import React from 'react';
import {column,getList} from './data'


const Table = () => {
    const list = getList()
    const s2DataConfig = {
        fields: {
          columns: column.map(item=>item.field),
        },
        meta: column.map(col => ({
            field: col.field,
            name: col.name,
            render: col.render,  // 确保将自定义渲染函数传递给 S2
          })),
        data: list,
      };
      const s2Options = {
        width: 1200,
        height: 700,
        
        seriesNumber: {
          enable: true,
        },
        frozen: {
          // 行头冻结数量
          rowCount: 1,
          // 列头冻结数量
          colCount: 1,
          // 行尾冻结数量
          trailingRowCount: 1,
          // 列尾冻结数量
          trailingColCount: 1,
        },
      };
      
      const onDataCellEditStart = (meta, cell) => {
        console.log('onDataCellEditStart:', meta, cell);
      };
  
      const onDataCellEditEnd = (meta, cell) => {
        console.log('onDataCellEditEnd:', meta, cell);
      };
  return (
    <SheetComponent
          dataCfg={s2DataConfig}
          options={s2Options}
          sheetType="editable"
          onDataCellEditStart={onDataCellEditStart}
          onDataCellEditEnd={onDataCellEditEnd}
        />
  )
}

export default Table