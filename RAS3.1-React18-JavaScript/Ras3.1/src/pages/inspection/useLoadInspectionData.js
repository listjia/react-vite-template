import { useRequest } from 'ahooks';

import { getInspections } from 'src/services';

// 获取检品
export const useGetInspectionList = () => {
  const { data, loading, error, refresh } = useRequest(async () => {
    const res = await getInspections({ intPageIndex: 1, intPageSize: 10 });
    return res;
  });
  const list = data?.resStr?.data || [];
  return { list, loading, error, refresh };
};
