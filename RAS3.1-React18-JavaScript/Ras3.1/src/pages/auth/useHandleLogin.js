import { useRequest } from 'ahooks';
import { toast } from 'sonner';
import { login } from 'src/services';
import { TOKEN_STORAGE_KEY } from 'src/constants';
import { useRouter } from 'src/routes/hooks';
import { paths } from '../../routes/paths';

// 节点操作信息
export const useLogin = () => {
  const router = useRouter();
  const { run, loading, error } = useRequest(
    async () => {
      const res = await login({ userId: 'admin', password: 'Yzj@2022' });
      return res;
    },
    {
      manual: true,
      onSuccess: (res) => {
        if (res && res.resCode == '1') {
          sessionStorage.setItem(TOKEN_STORAGE_KEY, res.resStr);
          toast.success('服务器开小差了，请稍后尝试！');
          router.push(paths.home);
        }
      },
      onFinally: (params, result, error) => {
        if (result) {
          toast.success('服务器开小差了，请稍后尝试！');
        } else {
          toast.error(`${result?.resTipCN || '服务器开小差了，请稍后尝试！'}`);
        }
      },
    }
  );
  return { run, loading, error };
};
