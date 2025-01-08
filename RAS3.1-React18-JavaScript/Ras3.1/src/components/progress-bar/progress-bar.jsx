import './styles.css';

import { nprogress, NavigationProgress } from '@mantine/nprogress';
import { useState, useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function ProgressBar() {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      nprogress.start();
      setVisible(true);
    }

    if (visible) {
      nprogress.stop();
      setVisible(false);
    }

    if (!visible && mounted) {
      setVisible(false);
      nprogress.stop();
    }

    return () => {
      nprogress.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, mounted]);

  if (!mounted) {
    return null;
  }

  return null;
}
