import type { FC } from 'react'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { ArchivePage } from '@/page/archive'

const App: FC = () => {
  return (
    <MantineProvider>
      <ArchivePage />
    </MantineProvider>
  )
}

export default App
