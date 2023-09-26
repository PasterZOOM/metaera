import { useId } from 'react'
import type { FC } from 'react'

import { Button, Group } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

const data = [
  { label: 'Сегодня', value: '' },
  { label: 'Неделя', value: '' },
  { label: 'Месяц', value: '' },
]

export const QuickPassage: FC = () => {
  const id = useId()
  return (
    <FilterWrapper title="Быстрый переход">
      <Group gap="sm" wrap="wrap">
        {data.map(status => (
          <Button key={`${id}-${status.value}`} variant="default">
            {status.label}
          </Button>
        ))}
      </Group>
    </FilterWrapper>
  )
}
