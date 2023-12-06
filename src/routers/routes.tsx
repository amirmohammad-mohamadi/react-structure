import {lazy} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'

import {
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTER_ROUTE,

  // protected
  DASHBOARD_ROUTE,
  TABLES_ROUTE,
  CHARTS_ROUTE,
} from 'constants/routes'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const PublicLayout = lazy(() => import('pages/public'))
const LoginPage = lazy(() => import('pages/public/login'))
const RegisterPage = lazy(() => import('pages/public/register'))
const ErrorPage = lazy(() => import('pages/public/error'))

const ProtectedLayout = lazy(() => import('pages/protected'))
const TablesLayout = lazy(() => import('pages/protected/tables'))
const ChartsLayout = lazy(() => import('pages/protected/charts'))

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <ProtectedLayout />,
          children: [
            {
              path: TABLES_ROUTE,
              element: <TablesLayout />,
            },
            {
              path: CHARTS_ROUTE,
              element: <ChartsLayout />,
            },
            {
              path: '/',
              element: <Navigate to={CHARTS_ROUTE} />,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          path: '/',
          element: <PublicLayout />,
          children: [
            {
              path: REGISTER_ROUTE,
              element: <RegisterPage />,
            },
            {
              path: LOGIN_ROUTE,
              element: <LoginPage />,
            },
            {
              path: '/',
              element: <Navigate to={LOGIN_ROUTE} />,
            },
          ],
        },
      ],
    },
    {
      path: NOT_FOUND_ROUTE,
      element: <ErrorPage />,
    },
  ])
}
