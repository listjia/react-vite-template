import { Helmet } from 'react-helmet-async';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const metadata = { title: `404 未找到页面! | 错误 - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Container className=" py-32  space-y-12 flex items-center flex-col">
        <div className=" text-5xl text-center font-semibold leading-none  text-zinc-300 sm:text-9xl">
          404
        </div>
        <Title className=" text-center font-extrabold text-3xl sm:text-6xl">这里什么也没有</Title>
        <Text c="dimmed" size="lg" className=" max-w-[500px]  text-center">
          抱歉，这是一个无效的地址，请输入正确的地址，或者这个地址已经被弃用
        </Text>
        <Group justify="center">
          <Button variant="subtle" size="lg">
            返回系统首页
          </Button>
        </Group>
      </Container>
    </>
  );
}
