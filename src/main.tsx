import React from 'react'

import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { appRouter, store } from '@/app'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={appRouter} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
