import { useRequest } from 'ahooks';

import { addProduct, editProduct, deleteProduct } from 'src/services';
// 节点操作信息
export const useAddProduct = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await addProduct(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};

export const useEditProduct = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await editProduct(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};

export const useDeleteProduct = () => {
  const { runAsync, loading, error } = useRequest(
    async (obj) => {
      const res = await deleteProduct(obj);
      return res;
    },
    { manual: true }
  );

  return { runAsync, loading, error };
};
