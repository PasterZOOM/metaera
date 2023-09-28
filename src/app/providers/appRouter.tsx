import { createBrowserRouter } from 'react-router-dom'

import { ArchivePage } from '@/pages/archive'
import { ErrorPage } from '@/pages/error'
import { RequestsPage } from '@/pages/requests'

import { RoutePath } from '@/shared/config/routerConfig'

import { Root } from '../ui/root'

export const appRouter = createBrowserRouter([
  {
    children: [
      {
        element: <RequestsPage />,
        path: RoutePath.records,
      },
      {
        element: <ArchivePage />,
        path: RoutePath.archive,
      },
    ],
    element: <Root />,
    errorElement: <ErrorPage />,
    path: '/',
  },
])
