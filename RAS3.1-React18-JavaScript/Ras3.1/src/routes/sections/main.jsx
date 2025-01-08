import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { CONFIG } from 'src/global-config';
import MainLayout from 'src/layouts/main-layout';

// import { LoadingScreen } from 'src/components/loading-screen';

// import { AuthGuard } from 'src/auth/guard';

import { usePathname } from '../hooks';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const InspectionPage = lazy(() => import('src/pages/inspection'));
const workPlacePage = lazy(() => import('src/pages/work-place'));
const LoginPage = lazy(() => import('src/pages/auth'));

// ----------------------------------------------------------------------

function SuspenseOutlet() {
  const pathname = usePathname();
  return (
    // <Suspense key={pathname} fallback={<LoadingScreen />}>
    <Suspense key={pathname} fallback={<div>123</div>}>
      <Outlet />
    </Suspense>
  );
}

const dashboardLayout = () => (
  <MainLayout>
    <SuspenseOutlet />
  </MainLayout>
);

export const mainRoutes = [
  { path: 'home', element: dashboardLayout(), children: [{ element: <HomePage />, index: true }] },
  {
    path: 'data',
    // element: CONFIG.auth.skip ? dashboardLayout() : <AuthGuard>{dashboardLayout()}</AuthGuard>,
    element: dashboardLayout(),
    children: [{ path: 'inspection', element: <InspectionPage /> }],
  },
  {
    path: 'system',
    element: dashboardLayout(),
    children: [{ path: 'position', element: <workPlacePage /> }],
  },
];
