import type { FC } from 'react'

import { Pagination, Text } from '@mantine/core'

import { Filters } from '@/features/filters'

export const OrdersPage: FC = () => {
  return (
    <div>
      <Text component="h1" fw={700} size="xl">
        Журнал заявки
      </Text>

      <Filters />

      <Pagination withEdges total={1} />
    </div>
  )
}
