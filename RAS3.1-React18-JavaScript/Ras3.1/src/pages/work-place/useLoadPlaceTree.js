import { useRequest } from 'ahooks';

import { getPlaceTree } from 'src/services';
// 节点操作信息
export const useGetPlaceTree = () => {
  const { data, loading, error, refresh } = useRequest(async () => {
    const res = await getPlaceTree({ intPageIndex: 1, intPageSize: 1000 });
    return res;
  });
  const treeList = data?.resStr || [];
  return { treeList, loading, error, refresh };
};
