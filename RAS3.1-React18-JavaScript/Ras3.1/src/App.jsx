import { useEffect } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { AuthProvider } from 'src/auth/auth-provider';
import { ProgressBar } from 'src/components/progress-bar';
import { usePathname } from 'src/routes/hooks';
import { Toaster } from 'sonner';

const theme = createTheme({
  fontFamily: 'Open Sans',
  components: {
    TextInput: {
      styles: {
        label: {
          marginBottom: '10px', // 全局调整 label 的下边距
        },
      },
    },
    Select: {
      styles: {
        label: {
          marginBottom: '10px', // 全局调整 label 的下边距
        },
      },
    },
  },
});

export default function App({ children }) {
  useScrollToTop();
  return (
    <AuthProvider>
      <MantineProvider theme={theme}>
        <ProgressBar />
        {children}
        <Toaster />
      </MantineProvider>
    </AuthProvider>
  );
}

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
