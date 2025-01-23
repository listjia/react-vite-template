import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

import { useLogin } from './useHandleLogin';

const Login = () => {
  const { run: login } = useLogin();
  const handleClick = () => {
    login();
  };
  return (
    <div className=" h-screen  object-cover  bg-[url('src/assets/bg2.jpg')] flex justify-start">
      <Paper className="  border-r min-h-[800px] sm:w-[450px]  w-full" radius={0} p={30}>
        <Title order={2} className="text-zinc-600 pt-32" ta="center" mb={50}>
          欢迎回到 RAS!
        </Title>

        <TextInput label="工号" placeholder="请输入工号" size="md" defaultValue="admin" />
        <PasswordInput
          label="密码"
          placeholder="请输入密码"
          mt="md"
          size="md"
          defaultValue="Yzj@2022"
        />
        <Checkbox label="保持登录状态" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={handleClick}>
          登录
        </Button>

        <Text ta="center" mt="md">
          还没有账号？
          <Anchor href="#" fw={700} onClick={(event) => event.preventDefault()}>
            注册
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
