import type { FC, ReactNode } from 'react'

import { Accordion } from '@mantine/core'

type Props = {
  children: ReactNode
}

export const AppAccordion: FC<Props> = props => {
  const { children } = props

  return (
    <Accordion
      styles={{
        content: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', width: '100%' },
        control: { display: 'flex', gap: '1rem', width: 'fit-content' },
      }}
    >
      <Accordion.Item value="filter">
        <Accordion.Control bg="transparent">Фильтр</Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
