import { useRequest } from 'ahooks';

import { getInspections } from 'src/services';

// 获取检品
export const useGetInspectionList = () => {
  const { data, loading, error, refresh } = useRequest(async () => {
    const res = await getInspections({ intPageIndex: 1, intPageSize: 10 });
    return res;
  });
  const list = data?.resStr || [];
  return { list, loading, error, refresh };
};

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
