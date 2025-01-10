import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from 'src/auth/auth-provider';
import { ProgressBar } from 'src/components/progress-bar';
import { usePathname } from 'src/routes/hooks';

export default function App({ children }) {
  useScrollToTop();
  return (
    <AuthProvider>
      <MantineProvider theme={{ fontFamily: 'Open Sans' }}>
        <ProgressBar />
        {children}
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
