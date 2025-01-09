import { Container, Stack, Group, Box } from '@mantine/core';

const MainLayoutContent = ({ children }) => {
  return <Box className=" flex-1 h-full overflow-y-auto bg-blue-50 px-10">{children}</Box>;
};

export default MainLayoutContent;
