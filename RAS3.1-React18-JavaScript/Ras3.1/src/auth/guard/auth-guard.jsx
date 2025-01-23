import { useState, useEffect } from 'react';

import { useRouter, usePathname } from 'src/routes/hooks';

import { SplashScreen } from 'src/components/Loading-screen';

import { useAuthContext } from '../use-auth-context.js';

// ----------------------------------------------------------------------

export function AuthGuard({ children }) {
  const router = useRouter();

  const pathname = usePathname();

  const { authenticated, loading } = useAuthContext();

  const [isChecking, setIsChecking] = useState(true);

  const createRedirectPath = (currentPath) => {
    const queryString = new URLSearchParams({ returnTo: pathname }).toString();
    return `${currentPath}?${queryString}`;
  };
  const checkPermissions = async () => {
    if (loading) {
      return;
    }

    if (!authenticated) {
      const signInPath = '/login';
      const redirectPath = createRedirectPath(signInPath);

      router.replace(redirectPath);

      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    // checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading]);

  // if (isChecking) {
  //   return <SplashScreen />;
  // }

  return <>{children}</>;
}
