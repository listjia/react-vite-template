import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';

import { CONFIG } from 'src/global-config';

// import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { SplashScreen } from 'src/components/loading-screen';
// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/auth'));
const Page404 = lazy(() => import('src/pages/error/404'));

export const routesSection = [
  {
    path: '/',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Navigate to={CONFIG.auth.redirectPath} replace />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  // Dashboard
  ...mainRoutes,

  // No match
  { path: '*', element: <Page404 /> },
];
