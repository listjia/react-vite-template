import { useRequest } from 'ahooks';

import { addPosition, editPosition, deletePosition } from 'src/services';
// 节点操作信息
export const useAddPosition = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await addPosition(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};

export const useEditPosition = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await editPosition(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};

export const useDeletePosition = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await deletePosition(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};
