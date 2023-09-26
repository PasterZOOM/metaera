import type { FC } from 'react'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

import { ArchivePage } from '@/page/archive'

export const App: FC = () => {
  return (
    <MantineProvider>
      <ArchivePage />
    </MantineProvider>
  )
}

export default App
