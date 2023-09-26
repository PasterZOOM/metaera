import type { FC } from 'react'

import { MantineProvider } from '@mantine/core'
// eslint-disable-next-line import/no-unresolved
import '@mantine/core/styles.css'

const App: FC = () => {
  return <MantineProvider>Hello world</MantineProvider>
}

export default App
