import type { FC } from 'react'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { Outlet } from 'react-router-dom'

export const Root: FC = () => {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  )
}
