import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { CONFIG } from 'src/global-config';
import MainLayout from 'src/layouts/main-layout';

// import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';
import { LoadingScreen } from 'src/components/loading-screen';

import { usePathname } from '../hooks';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const InspectionPage = lazy(() => import('src/pages/inspection'));
const WorkPlacePage = lazy(() => import('src/pages/work-place'));
const LoginPage = lazy(() => import('src/pages/auth'));

// ----------------------------------------------------------------------

function SuspenseOutlet() {
  const pathname = usePathname();
  return (
    // <Suspense key={pathname} fallback={<LoadingScreen />}>
    <Suspense key={pathname} fallback={<LoadingScreen />}>
      {CONFIG.auth.skip ? (
        <Outlet />
      ) : (
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      )}
    </Suspense>
  );
}

const customLayout = () => (
  <MainLayout>
    <SuspenseOutlet />
  </MainLayout>
);

export const mainRoutes = [
  { path: 'home', element: customLayout(), children: [{ element: <HomePage />, index: true }] },
  {
    path: 'data',
    // element: CONFIG.auth.skip ? customLayout() : <AuthGuard>{customLayout()}</AuthGuard>,
    element: customLayout(),
    children: [{ path: 'inspection', element: <InspectionPage /> }],
  },
  {
    path: 'system',
    element: customLayout(),
    children: [{ path: 'position', element: <WorkPlacePage /> }],
  },
];
