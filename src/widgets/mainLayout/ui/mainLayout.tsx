import type { FC, ReactNode } from 'react'

import { Pagination, Text } from '@mantine/core'

import { Filters } from '@/features/filters'

type Props = {
  children: ReactNode
  title: ReactNode
}

export const MainLayout: FC<Props> = props => {
  const { children, title } = props

  return (
    <div>
      <Text component="h1" fw={700} size="xl">
        {title}
      </Text>

      <Filters />

      {children}
      <Pagination withEdges total={1} />
    </div>
  )
}
