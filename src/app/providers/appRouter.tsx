import { createBrowserRouter } from 'react-router-dom'

import { ArchivePage } from '@/page/archive'
import { ErrorPage } from '@/page/error'

import { Root } from '../ui/root'

export const appRouter = createBrowserRouter([
  {
    children: [
      {
        element: <ArchivePage />,
        path: '/archive',
      },
    ],
    element: <Root />,
    errorElement: <ErrorPage />,
    path: '/',
  },
])
