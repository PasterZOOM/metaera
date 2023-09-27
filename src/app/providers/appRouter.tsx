import { createBrowserRouter } from 'react-router-dom'

import { ArchivePage } from '@/pages/archive'
import { ErrorPage } from '@/pages/error'
import { OrdersPage } from '@/pages/orders'

import { RoutePath } from '@/shared/config/routerConfig'

import { Root } from '../ui/root'

export const appRouter = createBrowserRouter([
  {
    children: [
      {
        element: <OrdersPage />,
        path: RoutePath.orders,
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
