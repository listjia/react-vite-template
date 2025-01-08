import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';

import './index.css';
import '@mantine/core/styles.css';
import App from './App.jsx';
import { routesSection } from './routes/sections';
import { ErrorBoundary } from './routes/components';

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
