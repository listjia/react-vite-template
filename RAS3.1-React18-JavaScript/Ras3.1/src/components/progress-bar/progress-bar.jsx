import '@mantine/nprogress/styles.css';

import { nprogress, NavigationProgress } from '@mantine/nprogress';
import { useState, useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function ProgressBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      nprogress.start(); // 开始进度条
      return () => {
        // nprogress.complete(); // 完成进度条
        nprogress.reset();
      };
    }
  }, [pathname, mounted]);

  if (!mounted) {
    return null;
  }

  return <NavigationProgress />;
}
